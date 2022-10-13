from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersDeleteGpgKeyForAuthenticatedPathParams:
    gpg_key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'gpg_key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteGpgKeyForAuthenticatedRequest:
    path_params: UsersDeleteGpgKeyForAuthenticatedPathParams = field(default=None)
    

@dataclass
class UsersDeleteGpgKeyForAuthenticatedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
