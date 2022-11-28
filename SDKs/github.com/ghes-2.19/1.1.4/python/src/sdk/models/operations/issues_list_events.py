from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class IssuesListEventsPathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesListEventsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListEventsRequest:
    path_params: IssuesListEventsPathParams = field()
    query_params: IssuesListEventsQueryParams = field()
    

@dataclass
class IssuesListEventsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue_event_for_issues: Optional[List[shared.IssueEventForIssue]] = field(default=None)
    
