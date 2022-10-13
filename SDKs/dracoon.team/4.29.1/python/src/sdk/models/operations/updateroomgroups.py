from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateRoomGroupsPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class UpdateRoomGroupsRequest:
    path_params: UpdateRoomGroupsPathParams = field(default=None)
    headers: UpdateRoomGroupsHeaders = field(default=None)
    request: shared.RoomGroupsAddBatchRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRoomGroupsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
