from dataclasses import dataclass, field



@dataclass
class PostActionWebhookFailuresIDRetryPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostActionWebhookFailuresIDRetryRequest:
    path_params: PostActionWebhookFailuresIDRetryPathParams = field()
    

@dataclass
class PostActionWebhookFailuresIDRetryResponse:
    content_type: str = field()
    status_code: int = field()
    
