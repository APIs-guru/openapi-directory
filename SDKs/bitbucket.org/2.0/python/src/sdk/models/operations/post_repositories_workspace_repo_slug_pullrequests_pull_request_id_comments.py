from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsPathParams:
    pull_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity:
    option1: Optional[PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity = field(default=None)
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pullrequest_comment: Optional[dict[str, Any]] = field(default=None)
    
