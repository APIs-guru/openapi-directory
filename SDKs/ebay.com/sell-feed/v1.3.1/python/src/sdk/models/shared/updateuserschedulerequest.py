from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateUserScheduleRequest:
    preferred_trigger_day_of_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredTriggerDayOfMonth' }})
    preferred_trigger_day_of_week: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredTriggerDayOfWeek' }})
    preferred_trigger_hour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredTriggerHour' }})
    schedule_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleEndDate' }})
    schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleName' }})
    schedule_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleStartDate' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    
