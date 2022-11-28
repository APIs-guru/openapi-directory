from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody:
    selected_repository_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    

@dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest:
    path_params: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams = field()
    request: Optional[ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
