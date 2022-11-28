from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserGetCredentialTypesForTargetAccountPathParams:
    membership_id: int = field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserGetCredentialTypesForTargetAccountRequest:
    path_params: UserGetCredentialTypesForTargetAccountPathParams = field()
    

@dataclass
class UserGetCredentialTypesForTargetAccountResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
