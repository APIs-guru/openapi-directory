from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPullrequestsForCommitPathParams:
    commit: str = field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPullrequestsForCommitQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagelen: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagelen', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPullrequestsForCommitRequest:
    path_params: GetPullrequestsForCommitPathParams = field()
    query_params: GetPullrequestsForCommitQueryParams = field()
    

@dataclass
class GetPullrequestsForCommitResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pullrequests: Optional[shared.PaginatedPullrequests] = field(default=None)
    
