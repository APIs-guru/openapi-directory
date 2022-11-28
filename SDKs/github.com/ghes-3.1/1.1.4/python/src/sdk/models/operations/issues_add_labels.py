from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IssuesAddLabelsPathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesAddLabelsRequestBody1:
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class IssuesAddLabelsRequestBody3Labels:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class IssuesAddLabelsRequestBody3:
    labels: Optional[List[IssuesAddLabelsRequestBody3Labels]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class IssuesAddLabelsRequestBody4:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class IssuesAddLabelsRequest:
    path_params: IssuesAddLabelsPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesAddLabelsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    labels: Optional[List[shared.Label]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
