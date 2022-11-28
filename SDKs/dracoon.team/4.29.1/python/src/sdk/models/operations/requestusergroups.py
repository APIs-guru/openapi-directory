from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestUserGroupsPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserGroupsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestUserGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserGroupsRequest:
    headers: RequestUserGroupsHeaders = field()
    path_params: RequestUserGroupsPathParams = field()
    query_params: RequestUserGroupsQueryParams = field()
    

@dataclass
class RequestUserGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_group_list: Optional[shared.UserGroupList] = field(default=None)
    
