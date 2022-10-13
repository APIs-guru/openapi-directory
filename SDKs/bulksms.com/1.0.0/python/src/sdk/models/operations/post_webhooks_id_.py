from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksIDRequest:
    path_params: PostWebhooksIDPathParams = field(default=None)
    request: shared.WebhookEntry = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostWebhooksIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
