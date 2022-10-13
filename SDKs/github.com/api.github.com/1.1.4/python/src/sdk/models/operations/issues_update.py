from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IssuesUpdatePathParams:
    issue_number: int = field(default=None, metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesUpdateRequestBodyLabels2:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class IssuesUpdateRequestBodyStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class IssuesUpdateRequestBody:
    assignee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    assignees: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    labels: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    milestone: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestone' }})
    state: Optional[IssuesUpdateRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class IssuesUpdateRequest:
    path_params: IssuesUpdatePathParams = field(default=None)
    request: Optional[IssuesUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class IssuesUpdate503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class IssuesUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue: Optional[shared.Issue] = field(default=None)
    issues_update_503_application_json_object: Optional[IssuesUpdate503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
