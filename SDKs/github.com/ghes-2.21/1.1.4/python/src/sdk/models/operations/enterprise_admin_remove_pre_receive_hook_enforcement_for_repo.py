from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest:
    path_params: EnterpriseAdminRemovePreReceiveHookEnforcementForRepoPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    repository_pre_receive_hook: Optional[shared.RepositoryPreReceiveHook] = field(default=None)
    
