from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Client
    A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerClientId') }})
    role: Optional[ClientRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    seller_visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerVisible') }})
    state: Optional[ClientStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class ClientInput:
    r"""ClientInput
    A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    partner_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerClientId') }})
    role: Optional[ClientRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    seller_visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerVisible') }})
    
