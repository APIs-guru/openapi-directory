from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ProjectsGetPermissionForUserPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsGetPermissionForUserRequest:
    path_params: ProjectsGetPermissionForUserPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ProjectsGetPermissionForUser415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ProjectsGetPermissionForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_get_permission_for_user_415_application_json_object: Optional[ProjectsGetPermissionForUser415ApplicationJSON] = field(default=None)
    repository_collaborator_permission: Optional[shared.RepositoryCollaboratorPermission] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
