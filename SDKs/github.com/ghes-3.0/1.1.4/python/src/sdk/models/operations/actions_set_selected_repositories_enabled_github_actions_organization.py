from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody:
    selected_repository_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_repository_ids' }})
    

@dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest:
    path_params: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams = field(default=None)
    request: Optional[ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
