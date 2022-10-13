from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartTimerDecisionAttributes:
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    start_to_fire_timeout: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startToFireTimeout' }})
    timer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timerId' }})
    
