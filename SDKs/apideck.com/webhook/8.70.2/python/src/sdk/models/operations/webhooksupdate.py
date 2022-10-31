from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebhooksUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class WebhooksUpdateRequest:
    path_params: WebhooksUpdatePathParams = field(default=None)
    headers: WebhooksUpdateHeaders = field(default=None)
    request: shared.UpdateWebhookRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksUpdateSecurity = field(default=None)
    

@dataclass
class WebhooksUpdateResponse:
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    content_type: str = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    update_webhook_response: Optional[shared.UpdateWebhookResponse] = field(default=None)
    
