from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest:
    path_params: EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams = field()
    

@dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    org_pre_receive_hook: Optional[shared.OrgPreReceiveHook] = field(default=None)
    
