from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import creativesize
from . import dayparttargeting


@dataclass_json
@dataclass
class TargetingValue:
    creative_size_value: Optional[creativesize.CreativeSize] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSizeValue' }})
    day_part_targeting_value: Optional[dayparttargeting.DayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayPartTargetingValue' }})
    long_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
