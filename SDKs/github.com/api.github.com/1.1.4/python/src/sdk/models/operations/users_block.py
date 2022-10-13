from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersBlockPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersBlockRequest:
    path_params: UsersBlockPathParams = field(default=None)
    

@dataclass
class UsersBlockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
