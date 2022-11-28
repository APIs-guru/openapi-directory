from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConsumersOnePathParams:
    consumer_id: str = field(metadata={'path_param': { 'field_name': 'consumer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConsumersOneHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConsumersOneSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConsumersOneRequest:
    headers: ConsumersOneHeaders = field()
    path_params: ConsumersOnePathParams = field()
    security: ConsumersOneSecurity = field()
    

@dataclass
class ConsumersOneResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    get_consumer_response: Optional[shared.GetConsumerResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
