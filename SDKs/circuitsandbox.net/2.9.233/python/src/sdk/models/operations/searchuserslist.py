from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class SearchUsersListQueryParams:
    name: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    return_full_user_info: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnFullUserInfo', 'style': 'form', 'explode': True }})
    secondary_lookup: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'secondaryLookup', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchUsersListSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchUsersListRequest:
    query_params: SearchUsersListQueryParams = field(default=None)
    security: SearchUsersListSecurity = field(default=None)
    

@dataclass
class SearchUsersListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[Any]] = field(default=None)
    
