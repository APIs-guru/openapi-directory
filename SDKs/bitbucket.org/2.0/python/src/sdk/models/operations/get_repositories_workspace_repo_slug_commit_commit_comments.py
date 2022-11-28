from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams:
    commit: str = field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams = field()
    query_params: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams = field()
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_commit_comments: Optional[shared.PaginatedCommitComments] = field(default=None)
    
