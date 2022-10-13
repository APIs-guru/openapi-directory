from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimePattern:
    hour: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    minute: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minute' }})
    second: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'second' }})
    
