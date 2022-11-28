from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsSetGithubActionsPermissionsOrganizationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetGithubActionsPermissionsOrganizationRequestBody:
    enabled_repositories: shared.EnabledRepositoriesEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_repositories') }})
    allowed_actions: Optional[shared.AllowedActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    

@dataclass
class ActionsSetGithubActionsPermissionsOrganizationRequest:
    path_params: ActionsSetGithubActionsPermissionsOrganizationPathParams = field()
    request: Optional[ActionsSetGithubActionsPermissionsOrganizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetGithubActionsPermissionsOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
