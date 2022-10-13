from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetGithubActionsPermissionsOrganizationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetGithubActionsPermissionsOrganizationRequest:
    path_params: ActionsGetGithubActionsPermissionsOrganizationPathParams = field(default=None)
    

@dataclass
class ActionsGetGithubActionsPermissionsOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_organization_permissions: Optional[shared.ActionsOrganizationPermissions] = field(default=None)
    
