from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorldCount:
    floorplan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorplanCount' }})
    interior_count_per_floorplan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interiorCountPerFloorplan' }})
    
