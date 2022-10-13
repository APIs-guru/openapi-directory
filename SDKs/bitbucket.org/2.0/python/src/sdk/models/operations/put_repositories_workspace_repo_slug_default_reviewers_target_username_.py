from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    target_username: str = field(default=None, metadata={'path_param': { 'field_name': 'target_username', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity:
    option1: Optional[PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest:
    path_params: PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams = field(default=None)
    security: PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity = field(default=None)
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
