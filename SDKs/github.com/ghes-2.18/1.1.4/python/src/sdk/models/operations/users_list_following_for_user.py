from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersListFollowingForUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersListFollowingForUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListFollowingForUserRequest:
    path_params: UsersListFollowingForUserPathParams = field()
    query_params: UsersListFollowingForUserQueryParams = field()
    

@dataclass
class UsersListFollowingForUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
