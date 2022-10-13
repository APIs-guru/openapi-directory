from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersDeletePublicSSHKeyForAuthenticatedPathParams:
    key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeletePublicSSHKeyForAuthenticatedRequest:
    path_params: UsersDeletePublicSSHKeyForAuthenticatedPathParams = field(default=None)
    

@dataclass
class UsersDeletePublicSSHKeyForAuthenticatedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
