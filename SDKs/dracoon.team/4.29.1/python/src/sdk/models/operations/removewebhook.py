from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveWebhookPathParams:
    webhook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveWebhookHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RemoveWebhookRequest:
    path_params: RemoveWebhookPathParams = field(default=None)
    headers: RemoveWebhookHeaders = field(default=None)
    

@dataclass
class RemoveWebhookResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
