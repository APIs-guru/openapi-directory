from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsPathParams:
    issue_id: str = field(metadata={'path_param': { 'field_name': 'issue_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsPathParams = field()
    query_params: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsQueryParams = field()
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_issue_comments: Optional[shared.PaginatedIssueComments] = field(default=None)
    
