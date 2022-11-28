from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteWebhookPathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhookSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteWebhookRequest:
    path_params: DeleteWebhookPathParams = field()
    security: DeleteWebhookSecurity = field()
    

@dataclass
class DeleteWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    
