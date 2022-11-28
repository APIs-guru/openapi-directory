from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsRemoveMembershipForUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsRemoveMembershipForUserRequest:
    path_params: OrgsRemoveMembershipForUserPathParams = field()
    

@dataclass
class OrgsRemoveMembershipForUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
