from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import allocatedconnection

class AppGatewayHostTypeEnum(str, Enum):
    HOST_TYPE_UNSPECIFIED = "HOST_TYPE_UNSPECIFIED"
    GCP_REGIONAL_MIG = "GCP_REGIONAL_MIG"

class AppGatewayStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DOWN = "DOWN"

class AppGatewayTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TCP_PROXY = "TCP_PROXY"


@dataclass_json
@dataclass
class AppGateway:
    allocated_connections: Optional[List[allocatedconnection.AllocatedConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocatedConnections' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    host_type: Optional[AppGatewayHostTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostType' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[AppGatewayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[AppGatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
