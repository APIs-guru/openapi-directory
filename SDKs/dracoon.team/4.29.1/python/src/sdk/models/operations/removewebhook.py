from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveWebhookPathParams:
    webhook_id: int = field(metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveWebhookHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveWebhookRequest:
    headers: RemoveWebhookHeaders = field()
    path_params: RemoveWebhookPathParams = field()
    

@dataclass
class RemoveWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
