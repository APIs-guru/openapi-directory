from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrderTypesUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrderTypesUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class OrderTypesUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrderTypesUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OrderTypesUpdateRequest:
    path_params: OrderTypesUpdatePathParams = field(default=None)
    query_params: OrderTypesUpdateQueryParams = field(default=None)
    headers: OrderTypesUpdateHeaders = field(default=None)
    request: shared.OrderType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: OrderTypesUpdateSecurity = field(default=None)
    

@dataclass
class OrderTypesUpdateResponse:
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    content_type: str = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    update_order_type_response: Optional[shared.UpdateOrderTypeResponse] = field(default=None)
    
