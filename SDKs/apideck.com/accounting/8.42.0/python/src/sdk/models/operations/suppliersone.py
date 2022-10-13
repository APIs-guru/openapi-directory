from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SuppliersOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SuppliersOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class SuppliersOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class SuppliersOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SuppliersOneRequest:
    path_params: SuppliersOnePathParams = field(default=None)
    query_params: SuppliersOneQueryParams = field(default=None)
    headers: SuppliersOneHeaders = field(default=None)
    security: SuppliersOneSecurity = field(default=None)
    

@dataclass
class SuppliersOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_supplier_response: Optional[shared.GetSupplierResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class SuppliersOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, SuppliersOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
