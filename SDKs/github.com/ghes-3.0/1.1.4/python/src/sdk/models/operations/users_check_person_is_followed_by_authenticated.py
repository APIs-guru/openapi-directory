from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersCheckPersonIsFollowedByAuthenticatedPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersCheckPersonIsFollowedByAuthenticatedRequest:
    path_params: UsersCheckPersonIsFollowedByAuthenticatedPathParams = field()
    

@dataclass
class UsersCheckPersonIsFollowedByAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
