from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetGpgKeyForAuthenticatedPathParams:
    gpg_key_id: int = field(metadata={'path_param': { 'field_name': 'gpg_key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetGpgKeyForAuthenticatedRequest:
    path_params: UsersGetGpgKeyForAuthenticatedPathParams = field()
    

@dataclass
class UsersGetGpgKeyForAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gpg_key: Optional[shared.GpgKey] = field(default=None)
    
