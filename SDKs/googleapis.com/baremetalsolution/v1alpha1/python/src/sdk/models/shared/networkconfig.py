from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import vlanattachment

class NetworkConfigBandwidthEnum(str, Enum):
    BANDWIDTH_UNSPECIFIED = "BANDWIDTH_UNSPECIFIED"
    BW_1_GBPS = "BW_1_GBPS"
    BW_2_GBPS = "BW_2_GBPS"
    BW_5_GBPS = "BW_5_GBPS"
    BW_10_GBPS = "BW_10_GBPS"

class NetworkConfigServiceCidrEnum(str, Enum):
    SERVICE_CIDR_UNSPECIFIED = "SERVICE_CIDR_UNSPECIFIED"
    DISABLED = "DISABLED"
    HIGH_26 = "HIGH_26"
    HIGH_27 = "HIGH_27"
    HIGH_28 = "HIGH_28"

class NetworkConfigTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CLIENT = "CLIENT"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclass
class NetworkConfig:
    bandwidth: Optional[NetworkConfigBandwidthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidr' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    service_cidr: Optional[NetworkConfigServiceCidrEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceCidr' }})
    type: Optional[NetworkConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userNote' }})
    vlan_attachments: Optional[List[vlanattachment.VlanAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanAttachments' }})
    
