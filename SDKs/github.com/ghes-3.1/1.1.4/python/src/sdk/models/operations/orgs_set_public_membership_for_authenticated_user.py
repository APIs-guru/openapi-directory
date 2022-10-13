from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsSetPublicMembershipForAuthenticatedUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsSetPublicMembershipForAuthenticatedUserRequest:
    path_params: OrgsSetPublicMembershipForAuthenticatedUserPathParams = field(default=None)
    

@dataclass
class OrgsSetPublicMembershipForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
