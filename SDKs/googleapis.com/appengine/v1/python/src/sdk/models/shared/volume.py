from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Volume:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    size_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeGb' }})
    volume_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeType' }})
    
