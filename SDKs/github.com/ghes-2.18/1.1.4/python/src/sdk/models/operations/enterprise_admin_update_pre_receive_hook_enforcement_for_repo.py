from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    TESTING = "testing"


@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody:
    enforcement: Optional[EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcement' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest:
    path_params: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    repository_pre_receive_hook: Optional[shared.RepositoryPreReceiveHook] = field(default=None)
    
