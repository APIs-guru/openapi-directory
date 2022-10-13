from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CustomersDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CustomersDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CustomersDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CustomersDeleteRequest:
    path_params: CustomersDeletePathParams = field(default=None)
    query_params: CustomersDeleteQueryParams = field(default=None)
    headers: CustomersDeleteHeaders = field(default=None)
    security: CustomersDeleteSecurity = field(default=None)
    

@dataclass
class CustomersDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_customer_response: Optional[shared.DeleteCustomerResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class CustomersDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CustomersDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
