from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatPathParams:
    pull_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
