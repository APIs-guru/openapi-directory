from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VlanAttachment:
    r"""VlanAttachment
    VLAN attachment details.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pairing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pairingKey') }})
    peer_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peerIp') }})
    peer_vlan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peerVlanId') }})
    qos_policy: Optional[QosPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qosPolicy') }})
    router_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routerIp') }})
    
