from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersListQueryParams:
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListRequest:
    query_params: UsersListQueryParams = field()
    

@dataclass
class UsersListResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
