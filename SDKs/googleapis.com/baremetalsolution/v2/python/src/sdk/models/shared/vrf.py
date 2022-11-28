from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VrfStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    PROVISIONED = "PROVISIONED"


@dataclass_json
@dataclass
class Vrf:
    r"""Vrf
    A network VRF.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    qos_policy: Optional[QosPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qosPolicy') }})
    state: Optional[VrfStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    vlan_attachments: Optional[List[VlanAttachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanAttachments') }})
    
