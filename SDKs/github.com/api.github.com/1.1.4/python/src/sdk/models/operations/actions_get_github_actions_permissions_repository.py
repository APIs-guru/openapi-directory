from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetGithubActionsPermissionsRepositoryPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetGithubActionsPermissionsRepositoryRequest:
    path_params: ActionsGetGithubActionsPermissionsRepositoryPathParams = field(default=None)
    

@dataclass
class ActionsGetGithubActionsPermissionsRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_repository_permissions: Optional[shared.ActionsRepositoryPermissions] = field(default=None)
    
