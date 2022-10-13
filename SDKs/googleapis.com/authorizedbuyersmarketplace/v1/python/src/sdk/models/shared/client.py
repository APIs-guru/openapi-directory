from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ClientRoleEnum(str, Enum):
    CLIENT_ROLE_UNSPECIFIED = "CLIENT_ROLE_UNSPECIFIED"
    CLIENT_DEAL_VIEWER = "CLIENT_DEAL_VIEWER"
    CLIENT_DEAL_NEGOTIATOR = "CLIENT_DEAL_NEGOTIATOR"
    CLIENT_DEAL_APPROVER = "CLIENT_DEAL_APPROVER"

class ClientStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class Client:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    partner_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerClientId' }})
    role: Optional[ClientRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    seller_visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerVisible' }})
    state: Optional[ClientStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
