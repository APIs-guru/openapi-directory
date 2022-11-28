from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClientEntityTypeEnum(str, Enum):
    ENTITY_TYPE_UNSPECIFIED = "ENTITY_TYPE_UNSPECIFIED"
    ADVERTISER = "ADVERTISER"
    BRAND = "BRAND"
    AGENCY = "AGENCY"
    ENTITY_TYPE_UNCLASSIFIED = "ENTITY_TYPE_UNCLASSIFIED"

class ClientRoleEnum(str, Enum):
    CLIENT_ROLE_UNSPECIFIED = "CLIENT_ROLE_UNSPECIFIED"
    CLIENT_DEAL_VIEWER = "CLIENT_DEAL_VIEWER"
    CLIENT_DEAL_NEGOTIATOR = "CLIENT_DEAL_NEGOTIATOR"
    CLIENT_DEAL_APPROVER = "CLIENT_DEAL_APPROVER"

class ClientStatusEnum(str, Enum):
    CLIENT_STATUS_UNSPECIFIED = "CLIENT_STATUS_UNSPECIFIED"
    DISABLED = "DISABLED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class Client:
    r"""Client
    A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.
    """
    
    client_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientAccountId') }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    entity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityName') }})
    entity_type: Optional[ClientEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityType') }})
    partner_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerClientId') }})
    role: Optional[ClientRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    status: Optional[ClientStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    visible_to_seller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleToSeller') }})
    
