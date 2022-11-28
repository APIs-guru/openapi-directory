from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestListOfWebhooksForRoomPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestListOfWebhooksForRoomQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestListOfWebhooksForRoomHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestListOfWebhooksForRoomRequest:
    headers: RequestListOfWebhooksForRoomHeaders = field()
    path_params: RequestListOfWebhooksForRoomPathParams = field()
    query_params: RequestListOfWebhooksForRoomQueryParams = field()
    

@dataclass
class RequestListOfWebhooksForRoomResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    room_webhook_list: Optional[shared.RoomWebhookList] = field(default=None)
    
