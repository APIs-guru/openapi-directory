from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostWebhooksRequest:
    security: PostWebhooksSecurity = field()
    request: Optional[shared.WebhooksCreatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostWebhooksResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
