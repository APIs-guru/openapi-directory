from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SearchUsersListQueryParams:
    name: List[str] = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    return_full_user_info: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnFullUserInfo', 'style': 'form', 'explode': True }})
    secondary_lookup: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'secondaryLookup', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchUsersListSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchUsersListRequest:
    query_params: SearchUsersListQueryParams = field()
    security: SearchUsersListSecurity = field()
    

@dataclass
class SearchUsersListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    users: Optional[List[Any]] = field(default=None)
    
