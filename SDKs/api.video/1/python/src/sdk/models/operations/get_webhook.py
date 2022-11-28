from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhookPathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhookSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetWebhookRequest:
    path_params: GetWebhookPathParams = field()
    security: GetWebhookSecurity = field()
    

@dataclass
class GetWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    webhook: Optional[shared.Webhook] = field(default=None)
    
