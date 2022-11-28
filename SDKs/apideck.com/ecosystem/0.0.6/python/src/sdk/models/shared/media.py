from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MediaTypeEnum(str, Enum):
    SCREENSHOT = "SCREENSHOT"
    VIDEO = "VIDEO"


@dataclass_json
@dataclass
class Media:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    translations: Optional[List[Translation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    type: Optional[MediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
