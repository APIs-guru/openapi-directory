from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SearchUserQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchUserSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchUserRequest:
    query_params: SearchUserQueryParams = field()
    security: SearchUserSecurity = field()
    

@dataclass
class SearchUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    users: Optional[List[Any]] = field(default=None)
    
