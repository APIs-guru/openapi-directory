from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import egress
from . import ingress

class ClientConnectorServiceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    RUNNING = "RUNNING"
    DOWN = "DOWN"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ClientConnectorService:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    egress: Optional[egress.Egress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egress' }})
    ingress: Optional[ingress.Ingress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingress' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[ClientConnectorServiceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
