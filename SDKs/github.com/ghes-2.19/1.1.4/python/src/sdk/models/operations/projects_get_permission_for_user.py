from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsGetPermissionForUserPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProjectsGetPermissionForUser415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ProjectsGetPermissionForUserRequest:
    path_params: ProjectsGetPermissionForUserPathParams = field()
    

@dataclass
class ProjectsGetPermissionForUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_get_permission_for_user_415_application_json_object: Optional[ProjectsGetPermissionForUser415ApplicationJSON] = field(default=None)
    repository_collaborator_permission: Optional[shared.RepositoryCollaboratorPermission] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
