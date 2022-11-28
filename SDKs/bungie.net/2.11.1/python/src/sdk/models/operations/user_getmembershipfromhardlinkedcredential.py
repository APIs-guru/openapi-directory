from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserGetMembershipFromHardLinkedCredentialPathParams:
    cr_type: int = field(metadata={'path_param': { 'field_name': 'crType', 'style': 'simple', 'explode': False }})
    credential: str = field(metadata={'path_param': { 'field_name': 'credential', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserGetMembershipFromHardLinkedCredentialRequest:
    path_params: UserGetMembershipFromHardLinkedCredentialPathParams = field()
    

@dataclass
class UserGetMembershipFromHardLinkedCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
