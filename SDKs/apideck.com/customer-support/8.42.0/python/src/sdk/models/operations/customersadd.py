from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CustomersAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CustomersAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CustomersAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CustomersAddRequest:
    query_params: CustomersAddQueryParams = field(default=None)
    headers: CustomersAddHeaders = field(default=None)
    request: shared.CustomerSupportCustomer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CustomersAddSecurity = field(default=None)
    

@dataclass
class CustomersAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_customer_support_customer_response: Optional[shared.CreateCustomerSupportCustomerResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class CustomersAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CustomersAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
