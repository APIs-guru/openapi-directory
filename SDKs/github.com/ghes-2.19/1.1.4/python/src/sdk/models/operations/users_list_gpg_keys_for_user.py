from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersListGpgKeysForUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersListGpgKeysForUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListGpgKeysForUserRequest:
    path_params: UsersListGpgKeysForUserPathParams = field(default=None)
    query_params: UsersListGpgKeysForUserQueryParams = field(default=None)
    

@dataclass
class UsersListGpgKeysForUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    gpg_keys: Optional[List[shared.GpgKey]] = field(default=None)
    
