from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkAddress:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    existing_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existingNetworkId' }})
    network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkId' }})
    
