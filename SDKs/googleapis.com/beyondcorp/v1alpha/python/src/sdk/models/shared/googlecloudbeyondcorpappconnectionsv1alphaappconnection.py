from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectionsv1alphaappconnectionapplicationendpoint
from . import googlecloudbeyondcorpappconnectionsv1alphaappconnectiongateway

class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DOWN = "DOWN"

class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TCP_PROXY = "TCP_PROXY"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection:
    application_endpoint: Optional[googlecloudbeyondcorpappconnectionsv1alphaappconnectionapplicationendpoint.GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationEndpoint' }})
    connectors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectors' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    gateway: Optional[googlecloudbeyondcorpappconnectionsv1alphaappconnectiongateway.GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
