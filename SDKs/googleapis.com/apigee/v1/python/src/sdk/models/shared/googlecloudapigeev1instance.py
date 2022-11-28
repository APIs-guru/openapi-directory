from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleCloudApigeeV1Instance
    Apigee runtime instance.
    """
    
    consumer_accept_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerAcceptList') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_encryption_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionKeyName') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipRange') }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    peering_cidr_range: Optional[GoogleCloudApigeeV1InstancePeeringCidrRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeringCidrRange') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    service_attachment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAttachment') }})
    state: Optional[GoogleCloudApigeeV1InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1InstanceInput:
    r"""GoogleCloudApigeeV1InstanceInput
    Apigee runtime instance.
    """
    
    consumer_accept_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerAcceptList') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_encryption_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionKeyName') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipRange') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    peering_cidr_range: Optional[GoogleCloudApigeeV1InstancePeeringCidrRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeringCidrRange') }})
    
