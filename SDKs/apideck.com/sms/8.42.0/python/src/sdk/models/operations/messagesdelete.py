from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class MessagesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class MessagesDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class MessagesDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MessagesDeleteRequest:
    path_params: MessagesDeletePathParams = field(default=None)
    query_params: MessagesDeleteQueryParams = field(default=None)
    headers: MessagesDeleteHeaders = field(default=None)
    security: MessagesDeleteSecurity = field(default=None)
    

@dataclass
class MessagesDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_message_response: Optional[shared.DeleteMessageResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class MessagesDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, MessagesDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
