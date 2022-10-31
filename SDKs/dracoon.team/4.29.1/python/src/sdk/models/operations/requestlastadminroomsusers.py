from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestLastAdminRoomsUsersPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLastAdminRoomsUsersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLastAdminRoomsUsersRequest:
    path_params: RequestLastAdminRoomsUsersPathParams = field(default=None)
    headers: RequestLastAdminRoomsUsersHeaders = field(default=None)
    

@dataclass
class RequestLastAdminRoomsUsersResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    last_admin_user_room_list: Optional[shared.LastAdminUserRoomList] = field(default=None)
    status_code: int = field(default=None)
    
