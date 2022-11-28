from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsGetMembershipForAuthenticatedUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsGetMembershipForAuthenticatedUserRequest:
    path_params: OrgsGetMembershipForAuthenticatedUserPathParams = field()
    

@dataclass
class OrgsGetMembershipForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_membership: Optional[shared.OrgMembership] = field(default=None)
    
