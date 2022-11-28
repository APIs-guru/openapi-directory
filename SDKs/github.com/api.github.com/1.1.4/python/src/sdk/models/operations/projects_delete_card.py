from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsDeleteCardPathParams:
    card_id: int = field(metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProjectsDeleteCard403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ProjectsDeleteCardRequest:
    path_params: ProjectsDeleteCardPathParams = field()
    

@dataclass
class ProjectsDeleteCardResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_delete_card_403_application_json_object: Optional[ProjectsDeleteCard403ApplicationJSON] = field(default=None)
    
