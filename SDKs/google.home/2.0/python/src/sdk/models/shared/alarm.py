from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import datepattern
from . import timepattern


@dataclass_json
@dataclass
class Alarm:
    date_pattern: datepattern.DatePattern = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_pattern' }})
    fire_time: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fire_time' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    time_pattern: timepattern.TimePattern = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_pattern' }})
    
