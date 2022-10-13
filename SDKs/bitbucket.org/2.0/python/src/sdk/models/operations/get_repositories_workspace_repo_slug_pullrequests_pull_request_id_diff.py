from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffPathParams:
    pull_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
