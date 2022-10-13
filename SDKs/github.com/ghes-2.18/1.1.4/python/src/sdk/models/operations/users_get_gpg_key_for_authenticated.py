from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetGpgKeyForAuthenticatedPathParams:
    gpg_key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'gpg_key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetGpgKeyForAuthenticatedRequest:
    path_params: UsersGetGpgKeyForAuthenticatedPathParams = field(default=None)
    

@dataclass
class UsersGetGpgKeyForAuthenticatedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    gpg_key: Optional[shared.GpgKey] = field(default=None)
    
