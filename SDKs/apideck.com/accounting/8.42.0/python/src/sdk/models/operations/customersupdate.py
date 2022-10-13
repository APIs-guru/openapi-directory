from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CustomersUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CustomersUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CustomersUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CustomersUpdateRequest:
    path_params: CustomersUpdatePathParams = field(default=None)
    query_params: CustomersUpdateQueryParams = field(default=None)
    headers: CustomersUpdateHeaders = field(default=None)
    request: shared.AccountingCustomer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CustomersUpdateSecurity = field(default=None)
    

@dataclass
class CustomersUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_customer_response: Optional[shared.UpdateCustomerResponse] = field(default=None)
    

@dataclass
class CustomersUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CustomersUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
