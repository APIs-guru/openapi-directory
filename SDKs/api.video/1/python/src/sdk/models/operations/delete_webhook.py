from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteWebhookPathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhookSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteWebhookRequest:
    path_params: DeleteWebhookPathParams = field(default=None)
    security: DeleteWebhookSecurity = field(default=None)
    

@dataclass
class DeleteWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
