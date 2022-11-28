from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersListGpgKeysForUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersListGpgKeysForUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListGpgKeysForUserRequest:
    path_params: UsersListGpgKeysForUserPathParams = field()
    query_params: UsersListGpgKeysForUserQueryParams = field()
    

@dataclass
class UsersListGpgKeysForUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    gpg_keys: Optional[List[shared.GpgKey]] = field(default=None)
    
