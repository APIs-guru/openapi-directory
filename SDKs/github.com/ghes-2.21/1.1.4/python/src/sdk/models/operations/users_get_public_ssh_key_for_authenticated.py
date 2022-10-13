from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetPublicSSHKeyForAuthenticatedPathParams:
    key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetPublicSSHKeyForAuthenticatedRequest:
    path_params: UsersGetPublicSSHKeyForAuthenticatedPathParams = field(default=None)
    

@dataclass
class UsersGetPublicSSHKeyForAuthenticatedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    key: Optional[shared.Key] = field(default=None)
    
