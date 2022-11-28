from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersFollowPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersFollowRequest:
    path_params: UsersFollowPathParams = field()
    

@dataclass
class UsersFollowResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
