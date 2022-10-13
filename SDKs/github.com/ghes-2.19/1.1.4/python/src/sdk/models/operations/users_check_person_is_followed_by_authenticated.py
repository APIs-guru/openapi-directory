from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersCheckPersonIsFollowedByAuthenticatedPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersCheckPersonIsFollowedByAuthenticatedRequest:
    path_params: UsersCheckPersonIsFollowedByAuthenticatedPathParams = field(default=None)
    

@dataclass
class UsersCheckPersonIsFollowedByAuthenticatedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
