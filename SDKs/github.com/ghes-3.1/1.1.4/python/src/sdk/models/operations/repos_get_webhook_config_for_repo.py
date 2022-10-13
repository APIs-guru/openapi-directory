from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetWebhookConfigForRepoPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetWebhookConfigForRepoRequest:
    path_params: ReposGetWebhookConfigForRepoPathParams = field(default=None)
    

@dataclass
class ReposGetWebhookConfigForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_config: Optional[shared.WebhookConfig] = field(default=None)
    
