from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsListCollaboratorsPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    
class ProjectsListCollaboratorsAffiliationEnum(str, Enum):
    OUTSIDE = "outside"
    DIRECT = "direct"
    ALL = "all"


@dataclass
class ProjectsListCollaboratorsQueryParams:
    affiliation: Optional[ProjectsListCollaboratorsAffiliationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ProjectsListCollaborators415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ProjectsListCollaboratorsRequest:
    path_params: ProjectsListCollaboratorsPathParams = field()
    query_params: ProjectsListCollaboratorsQueryParams = field()
    

@dataclass
class ProjectsListCollaboratorsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_list_collaborators_415_application_json_object: Optional[ProjectsListCollaborators415ApplicationJSON] = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
