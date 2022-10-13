from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestTenantWebhookPathParams:
    webhook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestTenantWebhookHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token' }})
    

@dataclass
class RequestTenantWebhookRequest:
    path_params: RequestTenantWebhookPathParams = field(default=None)
    headers: RequestTenantWebhookHeaders = field(default=None)
    

@dataclass
class RequestTenantWebhookResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
