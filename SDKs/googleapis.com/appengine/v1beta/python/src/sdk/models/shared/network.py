from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class NetworkInstanceIPModeEnum(str, Enum):
    INSTANCE_IP_MODE_UNSPECIFIED = "INSTANCE_IP_MODE_UNSPECIFIED"
    EXTERNAL = "EXTERNAL"
    INTERNAL = "INTERNAL"


@dataclass_json
@dataclass
class Network:
    forwarded_ports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardedPorts' }})
    instance_ip_mode: Optional[NetworkInstanceIPModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceIpMode' }})
    instance_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    session_affinity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionAffinity' }})
    subnetwork_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetworkName' }})
    
