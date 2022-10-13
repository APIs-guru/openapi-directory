from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class SearchIssuesAndPullRequestsSortEnum(str, Enum):
    COMMENTS = "comments"
    REACTIONS = "reactions"
    REACTIONS_PLUS_1 = "reactions-+1"
    REACTIONS_1 = "reactions--1"
    REACTIONS_SMILE = "reactions-smile"
    REACTIONS_THINKING_FACE = "reactions-thinking_face"
    REACTIONS_HEART = "reactions-heart"
    REACTIONS_TADA = "reactions-tada"
    INTERACTIONS = "interactions"
    CREATED = "created"
    UPDATED = "updated"


@dataclass
class SearchIssuesAndPullRequestsQueryParams:
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[SearchIssuesAndPullRequestsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchIssuesAndPullRequestsRequest:
    query_params: SearchIssuesAndPullRequestsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SearchIssuesAndPullRequests200ApplicationJSON:
    incomplete_results: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incomplete_results' }})
    items: List[shared.IssueSearchResultItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass_json
@dataclass
class SearchIssuesAndPullRequests503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SearchIssuesAndPullRequestsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    search_issues_and_pull_requests_200_application_json_object: Optional[SearchIssuesAndPullRequests200ApplicationJSON] = field(default=None)
    search_issues_and_pull_requests_503_application_json_object: Optional[SearchIssuesAndPullRequests503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
