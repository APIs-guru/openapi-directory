from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrgsSetMembershipForUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class OrgsSetMembershipForUserRequestBodyRoleEnum(str, Enum):
    ADMIN = "admin"
    MEMBER = "member"


@dataclass_json
@dataclass
class OrgsSetMembershipForUserRequestBody:
    role: Optional[OrgsSetMembershipForUserRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass
class OrgsSetMembershipForUserRequest:
    path_params: OrgsSetMembershipForUserPathParams = field(default=None)
    request: Optional[OrgsSetMembershipForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsSetMembershipForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_membership: Optional[shared.OrgMembership] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
