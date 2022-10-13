from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DestinationRoute:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    netmask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netmask' }})
    
