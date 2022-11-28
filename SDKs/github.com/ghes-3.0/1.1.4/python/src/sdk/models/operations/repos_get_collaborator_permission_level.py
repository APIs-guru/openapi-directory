from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetCollaboratorPermissionLevelPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCollaboratorPermissionLevelRequest:
    path_params: ReposGetCollaboratorPermissionLevelPathParams = field()
    

@dataclass
class ReposGetCollaboratorPermissionLevelResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    repository_collaborator_permission: Optional[shared.RepositoryCollaboratorPermission] = field(default=None)
    
