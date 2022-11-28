from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NetworkInstanceIPModeEnum(str, Enum):
    INSTANCE_IP_MODE_UNSPECIFIED = "INSTANCE_IP_MODE_UNSPECIFIED"
    EXTERNAL = "EXTERNAL"
    INTERNAL = "INTERNAL"


@dataclass_json
@dataclass
class Network:
    r"""Network
    Extra network settings. Only applicable in the App Engine flexible environment.
    """
    
    forwarded_ports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardedPorts') }})
    instance_ip_mode: Optional[NetworkInstanceIPModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceIpMode') }})
    instance_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    session_affinity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionAffinity') }})
    subnetwork_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetworkName') }})
    
