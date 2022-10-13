from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    client_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientAccountId' }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    entity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityName' }})
    entity_type: Optional[ClientEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityType' }})
    partner_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerClientId' }})
    role: Optional[ClientRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    status: Optional[ClientStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    visible_to_seller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleToSeller' }})
    
