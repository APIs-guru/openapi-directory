from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestLastAdminRoomsGroupsPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLastAdminRoomsGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLastAdminRoomsGroupsRequest:
    headers: RequestLastAdminRoomsGroupsHeaders = field()
    path_params: RequestLastAdminRoomsGroupsPathParams = field()
    

@dataclass
class RequestLastAdminRoomsGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    last_admin_group_room_list: Optional[shared.LastAdminGroupRoomList] = field(default=None)
    
