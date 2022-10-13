from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceID:
    build_brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBrand' }})
    build_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildDevice' }})
    
