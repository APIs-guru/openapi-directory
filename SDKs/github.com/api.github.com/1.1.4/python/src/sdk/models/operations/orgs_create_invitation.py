from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrgsCreateInvitationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsCreateInvitationRequestBodyRoleEnum(str, Enum):
    ADMIN = "admin"
    DIRECT_MEMBER = "direct_member"
    BILLING_MANAGER = "billing_manager"


@dataclass_json
@dataclass
class OrgsCreateInvitationRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    invitee_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitee_id') }})
    role: Optional[OrgsCreateInvitationRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    team_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_ids') }})
    

@dataclass
class OrgsCreateInvitationRequest:
    path_params: OrgsCreateInvitationPathParams = field()
    request: Optional[OrgsCreateInvitationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsCreateInvitationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    organization_invitation: Optional[shared.OrganizationInvitation] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
