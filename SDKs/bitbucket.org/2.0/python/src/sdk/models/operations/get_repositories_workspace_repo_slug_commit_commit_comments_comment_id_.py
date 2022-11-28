from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    commit: str = field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDPathParams = field()
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDResponse:
    content_type: str = field()
    status_code: int = field()
    commit_comment: Optional[dict[str, Any]] = field(default=None)
    
