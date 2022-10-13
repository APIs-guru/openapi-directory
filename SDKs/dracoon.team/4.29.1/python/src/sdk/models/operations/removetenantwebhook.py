from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveTenantWebhookPathParams:
    webhook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveTenantWebhookHeaders:
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token' }})
    

@dataclass
class RemoveTenantWebhookRequest:
    path_params: RemoveTenantWebhookPathParams = field(default=None)
    headers: RemoveTenantWebhookHeaders = field(default=None)
    

@dataclass
class RemoveTenantWebhookResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
