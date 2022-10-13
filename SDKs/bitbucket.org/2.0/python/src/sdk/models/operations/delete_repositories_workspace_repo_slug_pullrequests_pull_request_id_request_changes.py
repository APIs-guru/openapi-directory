from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesPathParams:
    pull_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity:
    option1: Optional[DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest:
    path_params: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesPathParams = field(default=None)
    security: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity = field(default=None)
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
