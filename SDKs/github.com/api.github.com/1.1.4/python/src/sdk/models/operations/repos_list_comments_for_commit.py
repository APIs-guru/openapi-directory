from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposListCommentsForCommitPathParams:
    commit_sha: str = field(metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListCommentsForCommitQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListCommentsForCommitRequest:
    path_params: ReposListCommentsForCommitPathParams = field()
    query_params: ReposListCommentsForCommitQueryParams = field()
    

@dataclass
class ReposListCommentsForCommitResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    commit_comments: Optional[List[shared.CommitComment]] = field(default=None)
    
