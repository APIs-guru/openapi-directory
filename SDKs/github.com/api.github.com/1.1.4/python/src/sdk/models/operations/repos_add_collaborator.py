from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposAddCollaboratorPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class ReposAddCollaboratorRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"
    MAINTAIN = "maintain"
    TRIAGE = "triage"


@dataclass_json
@dataclass
class ReposAddCollaboratorRequestBody:
    permission: Optional[ReposAddCollaboratorRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    permissions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass
class ReposAddCollaboratorRequest:
    path_params: ReposAddCollaboratorPathParams = field(default=None)
    request: Optional[ReposAddCollaboratorRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposAddCollaboratorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repository_invitation: Optional[shared.RepositoryInvitation] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
