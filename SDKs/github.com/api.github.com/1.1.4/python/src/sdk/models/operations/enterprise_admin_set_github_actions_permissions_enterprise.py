from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody:
    enabled_organizations: shared.EnabledOrganizationsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_organizations') }})
    allowed_actions: Optional[shared.AllowedActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    

@dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest:
    path_params: EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams = field()
    request: Optional[EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
