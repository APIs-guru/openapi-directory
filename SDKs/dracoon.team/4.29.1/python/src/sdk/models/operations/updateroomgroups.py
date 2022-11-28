from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateRoomGroupsPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomGroupsRequest:
    headers: UpdateRoomGroupsHeaders = field()
    path_params: UpdateRoomGroupsPathParams = field()
    request: shared.RoomGroupsAddBatchRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRoomGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
