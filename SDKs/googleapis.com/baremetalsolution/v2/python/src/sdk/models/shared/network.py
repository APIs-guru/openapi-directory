from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NetworkStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    PROVISIONED = "PROVISIONED"
    DEPROVISIONING = "DEPROVISIONING"
    UPDATING = "UPDATING"

class NetworkTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CLIENT = "CLIENT"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclass
class Network:
    r"""Network
    A Network.
    """
    
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    gateway_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayIp') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    jumbo_frames_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jumboFramesEnabled') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mac_address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macAddress') }})
    mount_points: Optional[List[NetworkMountPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoints') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pod: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pod') }})
    reservations: Optional[List[NetworkAddressReservation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations') }})
    services_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicesCidr') }})
    state: Optional[NetworkStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[NetworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vlan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    vrf: Optional[Vrf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vrf') }})
    
