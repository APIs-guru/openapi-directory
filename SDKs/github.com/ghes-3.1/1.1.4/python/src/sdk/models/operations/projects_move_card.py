from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ProjectsMoveCardPathParams:
    card_id: int = field(default=None, metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProjectsMoveCardRequestBody:
    column_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_id' }})
    position: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    

@dataclass
class ProjectsMoveCardRequest:
    path_params: ProjectsMoveCardPathParams = field(default=None)
    request: Optional[ProjectsMoveCardRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ProjectsMoveCard403ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    

@dataclass_json
@dataclass
class ProjectsMoveCard403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    errors: Optional[List[ProjectsMoveCard403ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ProjectsMoveCard503ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ProjectsMoveCard503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    errors: Optional[List[ProjectsMoveCard503ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ProjectsMoveCardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects_move_card_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    projects_move_card_403_application_json_object: Optional[ProjectsMoveCard403ApplicationJSON] = field(default=None)
    projects_move_card_503_application_json_object: Optional[ProjectsMoveCard503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
