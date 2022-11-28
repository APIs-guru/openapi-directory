from dataclasses import dataclass, field
from typing import List,Optional
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
class IssuesAddLabelsRequestBody:
    labels: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass
class IssuesAddLabelsRequest:
    path_params: IssuesAddLabelsPathParams = field()
    request: Optional[IssuesAddLabelsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesAddLabelsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    labels: Optional[List[shared.Label]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
