from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RevokeRoomUsersPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoomUsersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoomUsersRequest:
    headers: RevokeRoomUsersHeaders = field()
    path_params: RevokeRoomUsersPathParams = field()
    request: shared.RoomUsersDeleteBatchRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RevokeRoomUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
