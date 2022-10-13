from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class SearchUserQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchUserSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchUserRequest:
    query_params: SearchUserQueryParams = field(default=None)
    security: SearchUserSecurity = field(default=None)
    

@dataclass
class SearchUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[Any]] = field(default=None)
    
