from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetGithubActionsPermissionsRepositoryPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetGithubActionsPermissionsRepositoryRequest:
    path_params: ActionsGetGithubActionsPermissionsRepositoryPathParams = field()
    

@dataclass
class ActionsGetGithubActionsPermissionsRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    actions_repository_permissions: Optional[shared.ActionsRepositoryPermissions] = field(default=None)
    
