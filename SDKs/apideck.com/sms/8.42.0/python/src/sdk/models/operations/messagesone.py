from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class MessagesOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class MessagesOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class MessagesOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MessagesOneRequest:
    path_params: MessagesOnePathParams = field(default=None)
    query_params: MessagesOneQueryParams = field(default=None)
    headers: MessagesOneHeaders = field(default=None)
    security: MessagesOneSecurity = field(default=None)
    

@dataclass
class MessagesOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_message_response: Optional[shared.GetMessageResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class MessagesOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, MessagesOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
