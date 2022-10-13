from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import leggeometry
from . import step


@dataclass_json
@dataclass
class Leg:
    distance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Distance' }})
    duration_seconds: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationSeconds' }})
    end_position: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndPosition' }})
    geometry: Optional[leggeometry.LegGeometry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geometry' }})
    start_position: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPosition' }})
    steps: List[step.Step] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    
