from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IssuesAddAssigneesPathParams:
    issue_number: int = field(default=None, metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesAddAssigneesRequestBody:
    assignees: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees' }})
    

@dataclass
class IssuesAddAssigneesRequest:
    path_params: IssuesAddAssigneesPathParams = field(default=None)
    request: Optional[IssuesAddAssigneesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesAddAssigneesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    issue_simple: Optional[shared.IssueSimple] = field(default=None)
    
