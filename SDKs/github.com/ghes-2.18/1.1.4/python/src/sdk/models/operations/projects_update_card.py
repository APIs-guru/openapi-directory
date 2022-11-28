from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ProjectsUpdateCardPathParams:
    card_id: int = field(metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProjectsUpdateCardRequestBody:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    

@dataclass
class ProjectsUpdateCardRequest:
    path_params: ProjectsUpdateCardPathParams = field()
    request: Optional[ProjectsUpdateCardRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsUpdateCardResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_card: Optional[shared.ProjectCard] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
