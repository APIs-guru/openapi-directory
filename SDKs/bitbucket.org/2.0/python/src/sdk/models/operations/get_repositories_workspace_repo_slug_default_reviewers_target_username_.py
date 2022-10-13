from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    target_username: str = field(default=None, metadata={'path_param': { 'field_name': 'target_username', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
