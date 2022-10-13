from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildingaddress
from . import buildingcoordinates


@dataclass_json
@dataclass
class Building:
    address: Optional[buildingaddress.BuildingAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    building_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildingId' }})
    building_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildingName' }})
    coordinates: Optional[buildingcoordinates.BuildingCoordinates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etags' }})
    floor_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorNames' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
