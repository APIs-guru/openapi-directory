from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Window2:
    days: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days' }})
    length_hours: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length_hours' }})
    start_hour: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_hour' }})
    
