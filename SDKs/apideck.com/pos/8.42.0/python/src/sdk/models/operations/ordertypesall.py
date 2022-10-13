from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OrderTypesAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class OrderTypesAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class OrderTypesAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OrderTypesAllRequest:
    query_params: OrderTypesAllQueryParams = field(default=None)
    headers: OrderTypesAllHeaders = field(default=None)
    security: OrderTypesAllSecurity = field(default=None)
    

@dataclass
class OrderTypesAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_order_types_response: Optional[shared.GetOrderTypesResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class OrderTypesAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, OrderTypesAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
