from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestWebhookPathParams:
    webhook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestWebhookHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestWebhookRequest:
    path_params: RequestWebhookPathParams = field(default=None)
    headers: RequestWebhookHeaders = field(default=None)
    

@dataclass
class RequestWebhookResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
