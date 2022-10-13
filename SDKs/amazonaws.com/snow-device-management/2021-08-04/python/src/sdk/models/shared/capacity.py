from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Capacity:
    available: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    
