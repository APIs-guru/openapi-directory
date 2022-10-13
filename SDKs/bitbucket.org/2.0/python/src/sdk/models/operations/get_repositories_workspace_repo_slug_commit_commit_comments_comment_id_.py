from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    commit: str = field(default=None, metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    commit_comment: Optional[dict[str, Any]] = field(default=None)
    
