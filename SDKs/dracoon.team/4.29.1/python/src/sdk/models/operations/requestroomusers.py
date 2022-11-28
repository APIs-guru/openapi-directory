from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestRoomUsersPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomUsersQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestRoomUsersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomUsersRequest:
    headers: RequestRoomUsersHeaders = field()
    path_params: RequestRoomUsersPathParams = field()
    query_params: RequestRoomUsersQueryParams = field()
    

@dataclass
class RequestRoomUsersResponseOutput:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    room_user_list: Optional[shared.RoomUserListOutput] = field(default=None)
    
