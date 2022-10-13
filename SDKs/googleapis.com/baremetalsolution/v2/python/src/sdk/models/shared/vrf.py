from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import qospolicy
from . import vlanattachment

class VrfStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    PROVISIONED = "PROVISIONED"


@dataclass_json
@dataclass
class Vrf:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    qos_policy: Optional[qospolicy.QosPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qosPolicy' }})
    state: Optional[VrfStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    vlan_attachments: Optional[List[vlanattachment.VlanAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanAttachments' }})
    
