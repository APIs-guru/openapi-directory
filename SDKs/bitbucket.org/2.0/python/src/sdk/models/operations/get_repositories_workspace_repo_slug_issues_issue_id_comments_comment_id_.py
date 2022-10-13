from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    issue_id: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    issue_comment: Optional[dict[str, Any]] = field(default=None)
    
