from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class InstanceInput:
    r"""InstanceInput
    A server.
    """
    
    hyperthreading_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreadingEnabled') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logical_interfaces: Optional[List[GoogleCloudBaremetalsolutionV2LogicalInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    luns: Optional[List[LunInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('luns') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTemplate') }})
    os_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    pod: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pod') }})
    volumes: Optional[List[VolumeInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclass
class Instance:
    r"""Instance
    A server.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    hyperthreading_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreadingEnabled') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interactive_serial_console_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactiveSerialConsoleEnabled') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logical_interfaces: Optional[List[GoogleCloudBaremetalsolutionV2LogicalInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    login_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginInfo') }})
    luns: Optional[List[Lun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('luns') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTemplate') }})
    networks: Optional[List[Network]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    os_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    pod: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pod') }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
