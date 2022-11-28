from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IssuesUpdatePathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesUpdateRequestBodyLabels2:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class IssuesUpdateRequestBodyStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class IssuesUpdateRequestBody:
    assignee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    assignees: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    labels: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    milestone: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestone') }})
    state: Optional[IssuesUpdateRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class IssuesUpdate503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class IssuesUpdateRequest:
    path_params: IssuesUpdatePathParams = field()
    request: Optional[IssuesUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue: Optional[shared.Issue] = field(default=None)
    issues_update_503_application_json_object: Optional[IssuesUpdate503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
