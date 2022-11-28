from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimerCanceledEventAttributes:
    r"""TimerCanceledEventAttributes
     Provides the details of the <code>TimerCanceled</code> event. 
    """
    
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerId') }})
    
