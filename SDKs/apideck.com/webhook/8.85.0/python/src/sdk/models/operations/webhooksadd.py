from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebhooksAddHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksAddSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class WebhooksAddRequest:
    headers: WebhooksAddHeaders = field()
    request: shared.CreateWebhookRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksAddSecurity = field()
    

@dataclass
class WebhooksAddResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    create_webhook_response: Optional[shared.CreateWebhookResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
