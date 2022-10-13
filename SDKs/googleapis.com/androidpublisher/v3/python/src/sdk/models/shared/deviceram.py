from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceRAM:
    max_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBytes' }})
    min_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBytes' }})
    
