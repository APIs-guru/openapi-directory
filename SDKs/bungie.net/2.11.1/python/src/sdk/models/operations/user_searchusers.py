from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserSearchUsersQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class UserSearchUsersRequest:
    query_params: UserSearchUsersQueryParams = field(default=None)
    

@dataclass
class UserSearchUsersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
