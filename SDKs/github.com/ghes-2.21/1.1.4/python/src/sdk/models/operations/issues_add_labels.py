from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IssuesAddLabelsPathParams:
    issue_number: int = field(default=None, metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesAddLabelsRequestBody1:
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    

@dataclass_json
@dataclass
class IssuesAddLabelsRequestBody3Labels:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class IssuesAddLabelsRequestBody3:
    labels: Optional[List[IssuesAddLabelsRequestBody3Labels]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    

@dataclass_json
@dataclass
class IssuesAddLabelsRequestBody4:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class IssuesAddLabelsRequest:
    path_params: IssuesAddLabelsPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesAddLabelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    labels: Optional[List[shared.Label]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
