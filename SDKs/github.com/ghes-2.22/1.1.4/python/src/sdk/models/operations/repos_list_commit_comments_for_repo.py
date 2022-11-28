from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposListCommitCommentsForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListCommitCommentsForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListCommitCommentsForRepoRequest:
    path_params: ReposListCommitCommentsForRepoPathParams = field()
    query_params: ReposListCommitCommentsForRepoQueryParams = field()
    

@dataclass
class ReposListCommitCommentsForRepoResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    commit_comments: Optional[List[shared.CommitComment]] = field(default=None)
    
