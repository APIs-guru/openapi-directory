from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import unit_enum


@dataclass_json
@dataclass
class ServiceLimit:
    is_service_limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isServiceLimited' }})
    unit: Optional[unit_enum.UnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
