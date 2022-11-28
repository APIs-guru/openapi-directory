from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsListForUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class ProjectsListForUserStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"


@dataclass
class ProjectsListForUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[ProjectsListForUserStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ProjectsListForUser415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ProjectsListForUserRequest:
    path_params: ProjectsListForUserPathParams = field()
    query_params: ProjectsListForUserQueryParams = field()
    

@dataclass
class ProjectsListForUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    projects: Optional[List[shared.Project]] = field(default=None)
    projects_list_for_user_415_application_json_object: Optional[ProjectsListForUser415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
