from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TargetingValueDayPartTargetingDayPart:
    day_of_week: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    end_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endHour' }})
    end_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endMinute' }})
    start_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startHour' }})
    start_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startMinute' }})
    
