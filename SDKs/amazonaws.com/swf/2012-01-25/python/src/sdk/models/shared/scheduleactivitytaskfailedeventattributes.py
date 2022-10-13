from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import activitytype
from . import scheduleactivitytaskfailedcause_enum


@dataclass_json
@dataclass
class ScheduleActivityTaskFailedEventAttributes:
    activity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityId' }})
    activity_type: activitytype.ActivityType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    cause: scheduleactivitytaskfailedcause_enum.ScheduleActivityTaskFailedCauseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    
