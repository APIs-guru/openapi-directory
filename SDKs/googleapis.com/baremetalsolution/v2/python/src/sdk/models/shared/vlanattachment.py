from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import qospolicy


@dataclass_json
@dataclass
class VlanAttachment:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    pairing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pairingKey' }})
    peer_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peerIp' }})
    peer_vlan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peerVlanId' }})
    qos_policy: Optional[qospolicy.QosPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qosPolicy' }})
    router_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routerIp' }})
    
