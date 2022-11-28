from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IssuesCreateMilestonePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class IssuesCreateMilestoneRequestBodyStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class IssuesCreateMilestoneRequestBody:
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    due_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on') }})
    state: Optional[IssuesCreateMilestoneRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass
class IssuesCreateMilestoneRequest:
    path_params: IssuesCreateMilestonePathParams = field()
    request: Optional[IssuesCreateMilestoneRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesCreateMilestoneResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    milestone: Optional[shared.Milestone] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
