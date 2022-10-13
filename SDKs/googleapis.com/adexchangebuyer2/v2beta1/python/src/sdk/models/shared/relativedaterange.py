from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelativeDateRange:
    duration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationDays' }})
    offset_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetDays' }})
    
