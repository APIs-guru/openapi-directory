from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhooksOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class WebhooksOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class WebhooksOneRequest:
    path_params: WebhooksOnePathParams = field(default=None)
    headers: WebhooksOneHeaders = field(default=None)
    security: WebhooksOneSecurity = field(default=None)
    

@dataclass
class WebhooksOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_webhook_response: Optional[shared.GetWebhookResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class WebhooksOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, WebhooksOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
