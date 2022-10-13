from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ProjectsCreateCardPathParams:
    column_id: int = field(default=None, metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProjectsCreateCardRequestBody1:
    note: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    

@dataclass_json
@dataclass
class ProjectsCreateCardRequestBody2:
    content_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_id' }})
    content_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    

@dataclass
class ProjectsCreateCardRequest:
    path_params: ProjectsCreateCardPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ProjectsCreateCard503ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ProjectsCreateCard503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    errors: Optional[List[ProjectsCreateCard503ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ProjectsCreateCardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_card: Optional[shared.ProjectCard] = field(default=None)
    projects_create_card_422_application_json_one_of: Optional[Any] = field(default=None)
    projects_create_card_503_application_json_object: Optional[ProjectsCreateCard503ApplicationJSON] = field(default=None)
    
