from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OrdersOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrdersOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class OrdersOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class OrdersOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OrdersOneRequest:
    path_params: OrdersOnePathParams = field(default=None)
    query_params: OrdersOneQueryParams = field(default=None)
    headers: OrdersOneHeaders = field(default=None)
    security: OrdersOneSecurity = field(default=None)
    

@dataclass
class OrdersOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_order_response: Optional[shared.GetOrderResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class OrdersOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, OrdersOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
