from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RevokeRoomGroupsPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoomGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoomGroupsRequest:
    path_params: RevokeRoomGroupsPathParams = field(default=None)
    headers: RevokeRoomGroupsHeaders = field(default=None)
    request: shared.RoomGroupsDeleteBatchRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RevokeRoomGroupsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
