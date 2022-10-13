from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import intakevlanattachment

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
    gcp_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcpService' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jumbo_frames_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jumboFramesEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_cidr: Optional[NetworkConfigServiceCidrEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceCidr' }})
    type: Optional[NetworkConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userNote' }})
    vlan_attachments: Optional[List[intakevlanattachment.IntakeVlanAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanAttachments' }})
    vlan_same_project: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanSameProject' }})
    
