from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudApigeeV1InstancePeeringCidrRangeEnum(str, Enum):
    CIDR_RANGE_UNSPECIFIED = "CIDR_RANGE_UNSPECIFIED"
    SLASH_16 = "SLASH_16"
    SLASH_17 = "SLASH_17"
    SLASH_18 = "SLASH_18"
    SLASH_19 = "SLASH_19"
    SLASH_20 = "SLASH_20"
    SLASH_22 = "SLASH_22"
    SLASH_23 = "SLASH_23"

class GoogleCloudApigeeV1InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Instance:
    consumer_accept_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerAcceptList' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_encryption_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskEncryptionKeyName' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipRange' }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    peering_cidr_range: Optional[GoogleCloudApigeeV1InstancePeeringCidrRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeringCidrRange' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeVersion' }})
    service_attachment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAttachment' }})
    state: Optional[GoogleCloudApigeeV1InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
