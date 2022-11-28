from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveTenantWebhookPathParams:
    webhook_id: int = field(metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveTenantWebhookHeaders:
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveTenantWebhookRequest:
    headers: RemoveTenantWebhookHeaders = field()
    path_params: RemoveTenantWebhookPathParams = field()
    

@dataclass
class RemoveTenantWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
