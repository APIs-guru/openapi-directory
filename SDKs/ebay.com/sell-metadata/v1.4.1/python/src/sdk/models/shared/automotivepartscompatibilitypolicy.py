from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutomotivePartsCompatibilityPolicy:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    category_tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTreeId' }})
    compatibility_based_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibilityBasedOn' }})
    compatible_vehicle_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibleVehicleTypes' }})
    max_number_of_compatible_vehicles: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumberOfCompatibleVehicles' }})
    
