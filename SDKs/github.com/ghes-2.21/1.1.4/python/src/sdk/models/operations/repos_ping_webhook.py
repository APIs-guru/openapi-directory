from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposPingWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposPingWebhookRequest:
    path_params: ReposPingWebhookPathParams = field()
    

@dataclass
class ReposPingWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
