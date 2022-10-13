from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsSetGithubActionsPermissionsOrganizationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetGithubActionsPermissionsOrganizationRequestBody:
    allowed_actions: Optional[shared.AllowedActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_actions' }})
    enabled_repositories: shared.EnabledRepositoriesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled_repositories' }})
    

@dataclass
class ActionsSetGithubActionsPermissionsOrganizationRequest:
    path_params: ActionsSetGithubActionsPermissionsOrganizationPathParams = field(default=None)
    request: Optional[ActionsSetGithubActionsPermissionsOrganizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetGithubActionsPermissionsOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
