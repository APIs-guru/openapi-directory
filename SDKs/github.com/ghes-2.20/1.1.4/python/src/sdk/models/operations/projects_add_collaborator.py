from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsAddCollaboratorPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class ProjectsAddCollaboratorRequestBodyPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class ProjectsAddCollaboratorRequestBody:
    permission: Optional[ProjectsAddCollaboratorRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclass
class ProjectsAddCollaborator415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ProjectsAddCollaboratorRequest:
    path_params: ProjectsAddCollaboratorPathParams = field()
    request: Optional[ProjectsAddCollaboratorRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsAddCollaboratorResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_add_collaborator_415_application_json_object: Optional[ProjectsAddCollaborator415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
