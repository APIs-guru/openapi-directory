from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LogicalNetworkInterfaceNetworkTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CLIENT = "CLIENT"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclass
class LogicalNetworkInterface:
    default_gateway: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultGateway' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_type: Optional[LogicalNetworkInterfaceNetworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkType' }})
    
