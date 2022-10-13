from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrgsCreateInvitationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsCreateInvitationRequestBodyRoleEnum(str, Enum):
    ADMIN = "admin"
    DIRECT_MEMBER = "direct_member"
    BILLING_MANAGER = "billing_manager"


@dataclass_json
@dataclass
class OrgsCreateInvitationRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    invitee_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitee_id' }})
    role: Optional[OrgsCreateInvitationRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    team_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_ids' }})
    

@dataclass
class OrgsCreateInvitationRequest:
    path_params: OrgsCreateInvitationPathParams = field(default=None)
    request: Optional[OrgsCreateInvitationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsCreateInvitationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    organization_invitation: Optional[shared.OrganizationInvitation] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
