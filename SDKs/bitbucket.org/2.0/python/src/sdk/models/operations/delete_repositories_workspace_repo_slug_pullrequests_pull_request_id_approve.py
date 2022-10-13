from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprovePathParams:
    pull_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity:
    option1: Optional[DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest:
    path_params: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprovePathParams = field(default=None)
    security: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity = field(default=None)
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
