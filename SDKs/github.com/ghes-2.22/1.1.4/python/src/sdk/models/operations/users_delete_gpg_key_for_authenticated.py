from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersDeleteGpgKeyForAuthenticatedPathParams:
    gpg_key_id: int = field(metadata={'path_param': { 'field_name': 'gpg_key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteGpgKeyForAuthenticatedRequest:
    path_params: UsersDeleteGpgKeyForAuthenticatedPathParams = field()
    

@dataclass
class UsersDeleteGpgKeyForAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
