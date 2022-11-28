from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestLastAdminRoomsUsersPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLastAdminRoomsUsersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLastAdminRoomsUsersRequest:
    headers: RequestLastAdminRoomsUsersHeaders = field()
    path_params: RequestLastAdminRoomsUsersPathParams = field()
    

@dataclass
class RequestLastAdminRoomsUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    last_admin_user_room_list: Optional[shared.LastAdminUserRoomList] = field(default=None)
    
