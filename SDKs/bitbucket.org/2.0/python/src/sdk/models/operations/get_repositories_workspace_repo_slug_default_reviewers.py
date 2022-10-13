from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDefaultReviewersPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
