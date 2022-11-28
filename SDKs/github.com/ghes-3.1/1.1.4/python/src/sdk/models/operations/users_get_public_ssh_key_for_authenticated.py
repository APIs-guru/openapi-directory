from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetPublicSSHKeyForAuthenticatedPathParams:
    key_id: int = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetPublicSSHKeyForAuthenticatedRequest:
    path_params: UsersGetPublicSSHKeyForAuthenticatedPathParams = field()
    

@dataclass
class UsersGetPublicSSHKeyForAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    key: Optional[shared.Key] = field(default=None)
    
