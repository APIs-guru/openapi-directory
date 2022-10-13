from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserScheduleResponse:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedType' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate' }})
    preferred_trigger_day_of_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredTriggerDayOfMonth' }})
    preferred_trigger_day_of_week: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredTriggerDayOfWeek' }})
    preferred_trigger_hour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredTriggerHour' }})
    schedule_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleEndDate' }})
    schedule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleId' }})
    schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleName' }})
    schedule_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleStartDate' }})
    schedule_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTemplateId' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    
