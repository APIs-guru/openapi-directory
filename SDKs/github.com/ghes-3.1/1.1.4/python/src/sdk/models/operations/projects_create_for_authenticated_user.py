from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class ProjectsCreateForAuthenticatedUserRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass_json
@dataclass
class ProjectsCreateForAuthenticatedUser415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ProjectsCreateForAuthenticatedUserRequest:
    request: Optional[ProjectsCreateForAuthenticatedUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsCreateForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    projects_create_for_authenticated_user_415_application_json_object: Optional[ProjectsCreateForAuthenticatedUser415ApplicationJSON] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
