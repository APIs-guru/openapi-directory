from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IssuesCreatePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesCreateRequestBodyLabels2:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class IssuesCreateRequestBody:
    assignee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    assignees: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    labels: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    milestone: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestone' }})
    title: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class IssuesCreateRequest:
    path_params: IssuesCreatePathParams = field(default=None)
    request: Optional[IssuesCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class IssuesCreate503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class IssuesCreateResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue: Optional[shared.Issue] = field(default=None)
    issues_create_503_application_json_object: Optional[IssuesCreate503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
