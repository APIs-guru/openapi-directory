from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateContextRequest:
    context_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContextName') }})
    context_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContextType') }})
    source: ContextSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
