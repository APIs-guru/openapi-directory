from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody:
    allowed_actions: Optional[shared.AllowedActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_actions' }})
    enabled_organizations: shared.EnabledOrganizationsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled_organizations' }})
    

@dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest:
    path_params: EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams = field(default=None)
    request: Optional[EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
