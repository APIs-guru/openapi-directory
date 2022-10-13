from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhooksDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class WebhooksDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class WebhooksDeleteRequest:
    path_params: WebhooksDeletePathParams = field(default=None)
    headers: WebhooksDeleteHeaders = field(default=None)
    security: WebhooksDeleteSecurity = field(default=None)
    

@dataclass
class WebhooksDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_webhook_response: Optional[shared.DeleteWebhookResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class WebhooksDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, WebhooksDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
