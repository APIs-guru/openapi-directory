from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dayofweek_enum


@dataclass_json
@dataclass
class WeeklySchedule:
    day_of_week: Optional[dayofweek_enum.DayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    
