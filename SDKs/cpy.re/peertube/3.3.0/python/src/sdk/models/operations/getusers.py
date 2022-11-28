from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetUsersQueryParams:
    blocked: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'blocked', 'style': 'form', 'explode': True }})
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[shared.UsersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersRequest:
    query_params: GetUsersQueryParams = field()
    security: GetUsersSecurity = field()
    

@dataclass
class GetUsersResponse:
    content_type: str = field()
    status_code: int = field()
    users: Optional[List[Any]] = field(default=None)
    
