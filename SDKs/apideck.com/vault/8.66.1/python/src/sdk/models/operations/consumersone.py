from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConsumersOnePathParams:
    consumer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'consumer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConsumersOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class ConsumersOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConsumersOneRequest:
    path_params: ConsumersOnePathParams = field(default=None)
    headers: ConsumersOneHeaders = field(default=None)
    security: ConsumersOneSecurity = field(default=None)
    

@dataclass
class ConsumersOneResponse:
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    content_type: str = field(default=None)
    get_consumer_response: Optional[shared.GetConsumerResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
