from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostWebhooksRequest:
    request: Optional[shared.WebhooksCreatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksSecurity = field(default=None)
    

@dataclass
class PostWebhooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
