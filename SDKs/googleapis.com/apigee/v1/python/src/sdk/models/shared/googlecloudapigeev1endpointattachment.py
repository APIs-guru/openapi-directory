from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    connection_state: Optional[GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionState' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_attachment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAttachment' }})
    state: Optional[GoogleCloudApigeeV1EndpointAttachmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
