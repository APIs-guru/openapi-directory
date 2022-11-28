from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsDeleteWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsDeleteWebhookRequest:
    path_params: OrgsDeleteWebhookPathParams = field()
    

@dataclass
class OrgsDeleteWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
