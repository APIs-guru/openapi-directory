from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import alarm
from . import timer


@dataclass_json
@dataclass
class Example18:
    alarm: List[alarm.Alarm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarm' }})
    timer: List[timer.Timer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer' }})
    
