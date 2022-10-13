from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrgsUpdateMembershipForAuthenticatedUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum(str, Enum):
    ACTIVE = "active"


@dataclass_json
@dataclass
class OrgsUpdateMembershipForAuthenticatedUserRequestBody:
    state: OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass
class OrgsUpdateMembershipForAuthenticatedUserRequest:
    path_params: OrgsUpdateMembershipForAuthenticatedUserPathParams = field(default=None)
    request: Optional[OrgsUpdateMembershipForAuthenticatedUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsUpdateMembershipForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_membership: Optional[shared.OrgMembership] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
