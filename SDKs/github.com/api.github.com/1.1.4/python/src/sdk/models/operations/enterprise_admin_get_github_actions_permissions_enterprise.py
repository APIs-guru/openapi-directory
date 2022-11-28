from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest:
    path_params: EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    actions_enterprise_permissions: Optional[shared.ActionsEnterprisePermissions] = field(default=None)
    
