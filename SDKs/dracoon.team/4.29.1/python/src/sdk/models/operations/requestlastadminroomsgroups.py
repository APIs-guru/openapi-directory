from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestLastAdminRoomsGroupsPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLastAdminRoomsGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLastAdminRoomsGroupsRequest:
    path_params: RequestLastAdminRoomsGroupsPathParams = field(default=None)
    headers: RequestLastAdminRoomsGroupsHeaders = field(default=None)
    

@dataclass
class RequestLastAdminRoomsGroupsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    last_admin_group_room_list: Optional[shared.LastAdminGroupRoomList] = field(default=None)
    status_code: int = field(default=None)
    
