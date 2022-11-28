from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class HandleRoomWebhookAssignmentsPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class HandleRoomWebhookAssignmentsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class HandleRoomWebhookAssignmentsRequest:
    headers: HandleRoomWebhookAssignmentsHeaders = field()
    path_params: HandleRoomWebhookAssignmentsPathParams = field()
    request: shared.UpdateRoomWebhookRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class HandleRoomWebhookAssignmentsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    room_webhook_list: Optional[shared.RoomWebhookList] = field(default=None)
    
