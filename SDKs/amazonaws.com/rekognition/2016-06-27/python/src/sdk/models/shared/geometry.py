from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingbox
from . import point


@dataclass_json
@dataclass
class Geometry:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingBox' }})
    polygon: Optional[List[point.Point]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Polygon' }})
    
