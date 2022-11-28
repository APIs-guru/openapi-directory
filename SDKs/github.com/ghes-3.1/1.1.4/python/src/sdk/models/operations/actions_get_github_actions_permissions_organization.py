from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetGithubActionsPermissionsOrganizationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetGithubActionsPermissionsOrganizationRequest:
    path_params: ActionsGetGithubActionsPermissionsOrganizationPathParams = field()
    

@dataclass
class ActionsGetGithubActionsPermissionsOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    actions_organization_permissions: Optional[shared.ActionsOrganizationPermissions] = field(default=None)
    
