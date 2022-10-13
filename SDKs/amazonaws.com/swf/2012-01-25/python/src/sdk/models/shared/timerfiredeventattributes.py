from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimerFiredEventAttributes:
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    timer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timerId' }})
    
