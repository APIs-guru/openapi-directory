from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ProjectsDeleteCardPathParams:
    card_id: int = field(default=None, metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsDeleteCardRequest:
    path_params: ProjectsDeleteCardPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ProjectsDeleteCard403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ProjectsDeleteCardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_delete_card_403_application_json_object: Optional[ProjectsDeleteCard403ApplicationJSON] = field(default=None)
    
