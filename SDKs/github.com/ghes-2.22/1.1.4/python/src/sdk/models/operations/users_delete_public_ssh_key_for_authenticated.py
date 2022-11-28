from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersDeletePublicSSHKeyForAuthenticatedPathParams:
    key_id: int = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeletePublicSSHKeyForAuthenticatedRequest:
    path_params: UsersDeletePublicSSHKeyForAuthenticatedPathParams = field()
    

@dataclass
class UsersDeletePublicSSHKeyForAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
