from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class PullsListReviewCommentsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class PullsListReviewCommentsForRepoDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class PullsListReviewCommentsForRepoSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    CREATED_AT = "created_at"


@dataclass
class PullsListReviewCommentsForRepoQueryParams:
    direction: Optional[PullsListReviewCommentsForRepoDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[PullsListReviewCommentsForRepoSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class PullsListReviewCommentsForRepoRequest:
    path_params: PullsListReviewCommentsForRepoPathParams = field(default=None)
    query_params: PullsListReviewCommentsForRepoQueryParams = field(default=None)
    

@dataclass
class PullsListReviewCommentsForRepoResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    pull_request_review_comments: Optional[List[shared.PullRequestReviewComment]] = field(default=None)
    
