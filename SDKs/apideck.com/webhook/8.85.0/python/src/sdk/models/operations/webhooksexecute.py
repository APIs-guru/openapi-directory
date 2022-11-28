from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhooksExecutePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksExecuteSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class WebhooksExecuteRequest:
    path_params: WebhooksExecutePathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksExecuteSecurity = field()
    

@dataclass
class WebhooksExecuteResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    execute_webhook_response: Optional[shared.ExecuteWebhookResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
