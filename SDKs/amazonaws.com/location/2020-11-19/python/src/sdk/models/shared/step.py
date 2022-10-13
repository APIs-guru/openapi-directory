from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Step:
    distance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Distance' }})
    duration_seconds: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationSeconds' }})
    end_position: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndPosition' }})
    geometry_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeometryOffset' }})
    start_position: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPosition' }})
    
