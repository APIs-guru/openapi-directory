from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsCreateCardPathParams:
    column_id: int = field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProjectsCreateCardRequestBody1:
    note: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    

@dataclass_json
@dataclass
class ProjectsCreateCardRequestBody2:
    content_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_id') }})
    content_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    

@dataclass_json
@dataclass
class ProjectsCreateCard503ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ProjectsCreateCard503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    errors: Optional[List[ProjectsCreateCard503ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ProjectsCreateCardRequest:
    path_params: ProjectsCreateCardPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsCreateCardResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_card: Optional[shared.ProjectCard] = field(default=None)
    projects_create_card_422_application_json_one_of: Optional[Any] = field(default=None)
    projects_create_card_503_application_json_object: Optional[ProjectsCreateCard503ApplicationJSON] = field(default=None)
    
