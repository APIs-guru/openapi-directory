from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portrange


@dataclass_json
@dataclass
class NetworkPathComponentDetails:
    address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    port_ranges: Optional[List[portrange.PortRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortRanges' }})
    
