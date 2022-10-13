from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbaremetalsolutionv2logicalinterface
from . import lun
from . import network
from . import volume

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    RUNNING = "RUNNING"
    DELETED = "DELETED"
    UPDATING = "UPDATING"
    STARTING = "STARTING"
    STOPPING = "STOPPING"
    SHUTDOWN = "SHUTDOWN"


@dataclass_json
@dataclass
class Instance:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    hyperthreading_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperthreadingEnabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interactive_serial_console_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactiveSerialConsoleEnabled' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    logical_interfaces: Optional[List[googlecloudbaremetalsolutionv2logicalinterface.GoogleCloudBaremetalsolutionV2LogicalInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicalInterfaces' }})
    login_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loginInfo' }})
    luns: Optional[List[lun.Lun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'luns' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTemplate' }})
    networks: Optional[List[network.Network]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    os_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osImage' }})
    pod: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pod' }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
