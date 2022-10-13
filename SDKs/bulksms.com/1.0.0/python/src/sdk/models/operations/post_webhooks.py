from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostWebhooksRequest:
    request: shared.WebhookEntry = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksSecurity = field(default=None)
    

@dataclass
class PostWebhooksResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
