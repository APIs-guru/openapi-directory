from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPAlias:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IP' }})
    interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mask' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    
