from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum(str, Enum):
    CONNECTION_STATE_UNSPECIFIED = "CONNECTION_STATE_UNSPECIFIED"
    UNAVAILABLE = "UNAVAILABLE"
    PENDING = "PENDING"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    CLOSED = "CLOSED"
    FROZEN = "FROZEN"
    NEEDS_ATTENTION = "NEEDS_ATTENTION"

class GoogleCloudApigeeV1EndpointAttachmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1EndpointAttachment:
    r"""GoogleCloudApigeeV1EndpointAttachment
    Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
    """
    
    connection_state: Optional[GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionState') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_attachment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAttachment') }})
    state: Optional[GoogleCloudApigeeV1EndpointAttachmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1EndpointAttachmentInput:
    r"""GoogleCloudApigeeV1EndpointAttachmentInput
    Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
    """
    
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_attachment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAttachment') }})
    
