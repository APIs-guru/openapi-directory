from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetCollaboratorPermissionLevelPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCollaboratorPermissionLevelRequest:
    path_params: ReposGetCollaboratorPermissionLevelPathParams = field(default=None)
    

@dataclass
class ReposGetCollaboratorPermissionLevelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repository_collaborator_permission: Optional[shared.RepositoryCollaboratorPermission] = field(default=None)
    
