from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActivityTaskCancelRequestedEventAttributes:
    activity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityId' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    
