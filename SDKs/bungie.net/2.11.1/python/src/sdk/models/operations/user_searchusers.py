from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserSearchUsersQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class UserSearchUsersRequest:
    query_params: UserSearchUsersQueryParams = field()
    

@dataclass
class UserSearchUsersResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
