from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersFollowPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersFollowRequest:
    path_params: UsersFollowPathParams = field(default=None)
    

@dataclass
class UsersFollowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
