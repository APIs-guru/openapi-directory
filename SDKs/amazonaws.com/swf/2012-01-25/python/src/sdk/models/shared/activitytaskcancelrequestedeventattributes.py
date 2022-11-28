from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActivityTaskCancelRequestedEventAttributes:
    r"""ActivityTaskCancelRequestedEventAttributes
    Provides the details of the <code>ActivityTaskCancelRequested</code> event.
    """
    
    activity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityId') }})
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
