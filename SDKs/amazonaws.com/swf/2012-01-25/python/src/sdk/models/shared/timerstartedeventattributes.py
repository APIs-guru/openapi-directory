from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimerStartedEventAttributes:
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    start_to_fire_timeout: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startToFireTimeout' }})
    timer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timerId' }})
    
