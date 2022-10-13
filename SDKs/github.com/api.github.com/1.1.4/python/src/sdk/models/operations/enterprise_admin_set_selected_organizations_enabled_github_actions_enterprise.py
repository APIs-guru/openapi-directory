from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody:
    selected_organization_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_organization_ids' }})
    

@dataclass
class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams = field(default=None)
    request: Optional[EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
