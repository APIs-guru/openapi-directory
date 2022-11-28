from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersListPublicKeysForUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersListPublicKeysForUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListPublicKeysForUserRequest:
    path_params: UsersListPublicKeysForUserPathParams = field()
    query_params: UsersListPublicKeysForUserQueryParams = field()
    

@dataclass
class UsersListPublicKeysForUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    key_simples: Optional[List[shared.KeySimple]] = field(default=None)
    
