from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Timer:
    fire_time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fire_time' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    original_duration: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_duration' }})
    status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
