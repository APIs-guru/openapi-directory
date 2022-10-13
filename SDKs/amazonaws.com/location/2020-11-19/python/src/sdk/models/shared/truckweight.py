from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import vehicleweightunit_enum


@dataclass_json
@dataclass
class TruckWeight:
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    unit: Optional[vehicleweightunit_enum.VehicleWeightUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
