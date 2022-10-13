from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class Stage:
    duration_in_minutes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationInMinutes' }})
    targets: List[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
