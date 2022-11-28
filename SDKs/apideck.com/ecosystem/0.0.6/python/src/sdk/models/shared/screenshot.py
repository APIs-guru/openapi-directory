from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Screenshot:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    file: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    translations: Optional[List[Translation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
