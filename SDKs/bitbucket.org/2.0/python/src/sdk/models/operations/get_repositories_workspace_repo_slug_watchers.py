from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugWatchersPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugWatchersSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugWatchersRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugWatchersPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugWatchersSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugWatchersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
