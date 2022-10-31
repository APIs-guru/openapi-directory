from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestRoleGroupsPathParams:
    role_id: int = field(default=None, metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoleGroupsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestRoleGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoleGroupsRequest:
    path_params: RequestRoleGroupsPathParams = field(default=None)
    query_params: RequestRoleGroupsQueryParams = field(default=None)
    headers: RequestRoleGroupsHeaders = field(default=None)
    

@dataclass
class RequestRoleGroupsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_group_list: Optional[shared.RoleGroupList] = field(default=None)
    status_code: int = field(default=None)
    
