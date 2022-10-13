from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhooksUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

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
class WebhooksUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_webhook_response: Optional[shared.UpdateWebhookResponse] = field(default=None)
    

@dataclass
class WebhooksUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, WebhooksUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
