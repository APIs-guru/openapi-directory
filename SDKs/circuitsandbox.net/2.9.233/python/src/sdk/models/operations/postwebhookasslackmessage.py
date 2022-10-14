from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostWebhookAsSlackMessagePathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhookAsSlackMessageRequest:
    path_params: PostWebhookAsSlackMessagePathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostWebhookAsSlackMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
