from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import principalinfo
from . import resourceinfo

class ConnectorStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DOWN = "DOWN"


@dataclass_json
@dataclass
class Connector:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    principal_info: Optional[principalinfo.PrincipalInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalInfo' }})
    resource_info: Optional[resourceinfo.ResourceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceInfo' }})
    state: Optional[ConnectorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
