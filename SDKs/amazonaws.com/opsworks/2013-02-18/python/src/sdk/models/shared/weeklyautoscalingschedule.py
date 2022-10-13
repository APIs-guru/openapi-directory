from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WeeklyAutoScalingSchedule:
    friday: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Friday' }})
    monday: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Monday' }})
    saturday: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Saturday' }})
    sunday: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sunday' }})
    thursday: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Thursday' }})
    tuesday: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tuesday' }})
    wednesday: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Wednesday' }})
    
