from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InvoiceItemsDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvoiceItemsDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class InvoiceItemsDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class InvoiceItemsDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class InvoiceItemsDeleteRequest:
    path_params: InvoiceItemsDeletePathParams = field(default=None)
    query_params: InvoiceItemsDeleteQueryParams = field(default=None)
    headers: InvoiceItemsDeleteHeaders = field(default=None)
    security: InvoiceItemsDeleteSecurity = field(default=None)
    

@dataclass
class InvoiceItemsDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_tax_rate_response: Optional[shared.DeleteTaxRateResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class InvoiceItemsDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, InvoiceItemsDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
