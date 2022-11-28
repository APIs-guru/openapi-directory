from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsMoveColumnPathParams:
    column_id: int = field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProjectsMoveColumnRequestBody:
    position: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    

@dataclass
class ProjectsMoveColumnRequest:
    path_params: ProjectsMoveColumnPathParams = field()
    request: Optional[ProjectsMoveColumnRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsMoveColumnResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_move_column_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
