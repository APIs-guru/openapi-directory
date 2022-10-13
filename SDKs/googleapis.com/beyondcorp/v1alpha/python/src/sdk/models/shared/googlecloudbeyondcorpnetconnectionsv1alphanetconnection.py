from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DOWN = "DOWN"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection:
    connectors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectors' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    destination_cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCidrs' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkVpc' }})
    state: Optional[GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
