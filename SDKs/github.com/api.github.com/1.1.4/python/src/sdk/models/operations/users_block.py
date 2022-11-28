from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersBlockPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersBlockRequest:
    path_params: UsersBlockPathParams = field()
    

@dataclass
class UsersBlockResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
