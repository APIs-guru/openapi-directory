from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostWebhooksRequest:
    request: shared.WebhookEntry = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksSecurity = field()
    

@dataclass
class PostWebhooksResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
