from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class RequestListOfWebhooksForRoomPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestListOfWebhooksForRoomQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestListOfWebhooksForRoomHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestListOfWebhooksForRoomRequest:
    path_params: RequestListOfWebhooksForRoomPathParams = field(default=None)
    query_params: RequestListOfWebhooksForRoomQueryParams = field(default=None)
    headers: RequestListOfWebhooksForRoomHeaders = field(default=None)
    

@dataclass
class RequestListOfWebhooksForRoomResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    room_webhook_list: Optional[shared.RoomWebhookList] = field(default=None)
    status_code: int = field(default=None)
    
