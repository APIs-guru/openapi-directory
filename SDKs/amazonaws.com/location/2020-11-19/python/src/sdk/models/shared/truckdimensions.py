from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensionunit_enum


@dataclass_json
@dataclass
class TruckDimensions:
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Length' }})
    unit: Optional[dimensionunit_enum.DimensionUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    
