from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ProjectsListCollaboratorsPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    
class ProjectsListCollaboratorsAffiliationEnum(str, Enum):
    OUTSIDE = "outside"
    DIRECT = "direct"
    ALL = "all"


@dataclass
class ProjectsListCollaboratorsQueryParams:
    affiliation: Optional[ProjectsListCollaboratorsAffiliationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ProjectsListCollaboratorsRequest:
    path_params: ProjectsListCollaboratorsPathParams = field(default=None)
    query_params: ProjectsListCollaboratorsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ProjectsListCollaborators415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ProjectsListCollaboratorsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_list_collaborators_415_application_json_object: Optional[ProjectsListCollaborators415ApplicationJSON] = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
