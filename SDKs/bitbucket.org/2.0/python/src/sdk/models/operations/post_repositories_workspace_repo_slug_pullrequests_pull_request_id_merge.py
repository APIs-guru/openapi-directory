from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergePathParams:
    pull_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeQueryParams:
    async_: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'async', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurity:
    option1: Optional[PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergePathParams = field(default=None)
    query_params: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeQueryParams = field(default=None)
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurity = field(default=None)
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pullrequest: Optional[dict[str, Any]] = field(default=None)
    
