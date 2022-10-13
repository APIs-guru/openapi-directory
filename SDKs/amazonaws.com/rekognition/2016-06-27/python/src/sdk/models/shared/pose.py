from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Pose:
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pitch' }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Roll' }})
    yaw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Yaw' }})
    
