from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposTestPushWebhookPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposTestPushWebhookRequest:
    path_params: ReposTestPushWebhookPathParams = field(default=None)
    

@dataclass
class ReposTestPushWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
