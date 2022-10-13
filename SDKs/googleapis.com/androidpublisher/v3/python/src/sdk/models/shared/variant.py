from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicespec


@dataclass_json
@dataclass
class Variant:
    device_spec: Optional[devicespec.DeviceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceSpec' }})
    variant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantId' }})
    
