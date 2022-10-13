from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import serviceperimeterconfig

class ServicePerimeterPerimeterTypeEnum(str, Enum):
    PERIMETER_TYPE_REGULAR = "PERIMETER_TYPE_REGULAR"
    PERIMETER_TYPE_BRIDGE = "PERIMETER_TYPE_BRIDGE"


@dataclass_json
@dataclass
class ServicePerimeter:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    perimeter_type: Optional[ServicePerimeterPerimeterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perimeterType' }})
    status: Optional[serviceperimeterconfig.ServicePerimeterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
