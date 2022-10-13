from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkInterface:
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaceId' }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpAddress' }})
    public_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIpAddress' }})
    
