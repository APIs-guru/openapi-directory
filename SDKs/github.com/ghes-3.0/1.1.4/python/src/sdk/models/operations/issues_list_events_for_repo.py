from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class IssuesListEventsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesListEventsForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListEventsForRepoRequest:
    path_params: IssuesListEventsForRepoPathParams = field(default=None)
    query_params: IssuesListEventsForRepoQueryParams = field(default=None)
    

@dataclass
class IssuesListEventsForRepoResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    issue_events: Optional[List[shared.IssueEvent]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
