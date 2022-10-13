from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhooksShortExecutePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksShortExecuteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class WebhooksShortExecuteRequest:
    path_params: WebhooksShortExecutePathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksShortExecuteSecurity = field(default=None)
    

@dataclass
class WebhooksShortExecuteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    execute_webhook_response: Optional[shared.ExecuteWebhookResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class WebhooksShortExecuteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, WebhooksShortExecuteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
