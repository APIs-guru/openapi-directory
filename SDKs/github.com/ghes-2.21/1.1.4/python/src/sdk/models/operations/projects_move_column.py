from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ProjectsMoveColumnPathParams:
    column_id: int = field(default=None, metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProjectsMoveColumnRequestBody:
    position: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    

@dataclass
class ProjectsMoveColumnRequest:
    path_params: ProjectsMoveColumnPathParams = field(default=None)
    request: Optional[ProjectsMoveColumnRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsMoveColumnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_move_column_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
