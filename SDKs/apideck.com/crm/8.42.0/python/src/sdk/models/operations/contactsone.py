from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ContactsOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactsOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ContactsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ContactsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ContactsOneRequest:
    path_params: ContactsOnePathParams = field(default=None)
    query_params: ContactsOneQueryParams = field(default=None)
    headers: ContactsOneHeaders = field(default=None)
    security: ContactsOneSecurity = field(default=None)
    

@dataclass
class ContactsOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_contact_response: Optional[shared.GetContactResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ContactsOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ContactsOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
