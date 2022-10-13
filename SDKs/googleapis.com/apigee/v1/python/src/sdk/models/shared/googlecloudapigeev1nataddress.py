from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudApigeeV1NatAddressStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RESERVED = "RESERVED"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1NatAddress:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudApigeeV1NatAddressStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
