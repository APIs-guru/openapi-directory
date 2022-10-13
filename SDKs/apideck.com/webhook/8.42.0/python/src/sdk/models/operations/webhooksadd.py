from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhooksAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class WebhooksAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class WebhooksAddRequest:
    headers: WebhooksAddHeaders = field(default=None)
    request: shared.CreateWebhookRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksAddSecurity = field(default=None)
    

@dataclass
class WebhooksAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_webhook_response: Optional[shared.CreateWebhookResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class WebhooksAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, WebhooksAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
