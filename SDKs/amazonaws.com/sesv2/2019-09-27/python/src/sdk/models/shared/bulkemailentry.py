from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkEmailEntry:
    destination: Destination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    replacement_email_content: Optional[ReplacementEmailContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementEmailContent') }})
    replacement_tags: Optional[List[MessageTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementTags') }})
    
