from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IssuesRemoveAssigneesPathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesRemoveAssigneesRequestBody:
    assignees: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees') }})
    

@dataclass
class IssuesRemoveAssigneesRequest:
    path_params: IssuesRemoveAssigneesPathParams = field()
    request: Optional[IssuesRemoveAssigneesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesRemoveAssigneesResponse:
    content_type: str = field()
    status_code: int = field()
    issue_simple: Optional[shared.IssueSimple] = field(default=None)
    
