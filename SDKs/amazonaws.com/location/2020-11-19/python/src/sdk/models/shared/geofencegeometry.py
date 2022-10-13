from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GeofenceGeometry:
    polygon: Optional[List[List[List[float]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Polygon' }})
    
