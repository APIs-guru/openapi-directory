from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AvailabilityRequestClosestEnum(str, Enum):
    EITHER = "either"
    AFTER = "after"
    BEFORE = "before"


@dataclass_json
@dataclass
class AvailabilityRequest:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }, 'form': { 'field_name': 'url' }})
    closest: Optional[AvailabilityRequestClosestEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closest') }, 'form': { 'field_name': 'closest' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }, 'form': { 'field_name': 'tag' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }, 'form': { 'field_name': 'timestamp' }})
    
