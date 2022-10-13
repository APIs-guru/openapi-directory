from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContainerServicePower:
    cpu_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuCount' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    power_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerId' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    ram_size_in_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ramSizeInGb' }})
    
