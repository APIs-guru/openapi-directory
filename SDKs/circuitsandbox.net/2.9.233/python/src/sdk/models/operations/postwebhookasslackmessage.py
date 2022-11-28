from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostWebhookAsSlackMessagePathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhookAsSlackMessageRequest:
    path_params: PostWebhookAsSlackMessagePathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostWebhookAsSlackMessageResponse:
    content_type: str = field()
    status_code: int = field()
    
