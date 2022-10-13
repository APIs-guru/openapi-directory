from dataclasses import dataclass, field



@dataclass
class PostActionWebhookFailuresIDRetryPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostActionWebhookFailuresIDRetryRequest:
    path_params: PostActionWebhookFailuresIDRetryPathParams = field(default=None)
    

@dataclass
class PostActionWebhookFailuresIDRetryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
