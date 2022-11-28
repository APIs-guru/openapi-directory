from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssuesGetPathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesGetRequest:
    path_params: IssuesGetPathParams = field()
    

@dataclass
class IssuesGetResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue: Optional[shared.Issue] = field(default=None)
    
