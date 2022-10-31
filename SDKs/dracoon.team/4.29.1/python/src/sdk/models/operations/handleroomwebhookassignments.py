from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class HandleRoomWebhookAssignmentsPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class HandleRoomWebhookAssignmentsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class HandleRoomWebhookAssignmentsRequest:
    path_params: HandleRoomWebhookAssignmentsPathParams = field(default=None)
    headers: HandleRoomWebhookAssignmentsHeaders = field(default=None)
    request: shared.UpdateRoomWebhookRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class HandleRoomWebhookAssignmentsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    room_webhook_list: Optional[shared.RoomWebhookList] = field(default=None)
    status_code: int = field(default=None)
    
