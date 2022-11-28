from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetPreReceiveHookForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetPreReceiveHookForRepoRequest:
    path_params: EnterpriseAdminGetPreReceiveHookForRepoPathParams = field()
    

@dataclass
class EnterpriseAdminGetPreReceiveHookForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    repository_pre_receive_hook: Optional[shared.RepositoryPreReceiveHook] = field(default=None)
    
