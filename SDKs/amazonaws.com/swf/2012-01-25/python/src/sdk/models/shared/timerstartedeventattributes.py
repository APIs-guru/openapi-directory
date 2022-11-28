from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimerStartedEventAttributes:
    r"""TimerStartedEventAttributes
    Provides the details of the <code>TimerStarted</code> event.
    """
    
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    start_to_fire_timeout: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startToFireTimeout') }})
    timer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerId') }})
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    
