from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsGetMembershipForUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsGetMembershipForUserRequest:
    path_params: OrgsGetMembershipForUserPathParams = field(default=None)
    

@dataclass
class OrgsGetMembershipForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_membership: Optional[shared.OrgMembership] = field(default=None)
    
