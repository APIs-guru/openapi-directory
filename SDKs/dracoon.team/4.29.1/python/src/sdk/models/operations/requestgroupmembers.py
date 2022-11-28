from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestGroupMembersPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestGroupMembersQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestGroupMembersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestGroupMembersRequest:
    headers: RequestGroupMembersHeaders = field()
    path_params: RequestGroupMembersPathParams = field()
    query_params: RequestGroupMembersQueryParams = field()
    

@dataclass
class RequestGroupMembersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    group_user_list: Optional[shared.GroupUserList] = field(default=None)
    
