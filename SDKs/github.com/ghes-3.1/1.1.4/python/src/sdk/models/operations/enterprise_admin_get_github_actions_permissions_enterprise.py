from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest:
    path_params: EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_enterprise_permissions: Optional[shared.ActionsEnterprisePermissions] = field(default=None)
    
