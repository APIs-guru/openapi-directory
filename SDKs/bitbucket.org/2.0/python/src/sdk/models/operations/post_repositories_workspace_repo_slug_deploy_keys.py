from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity:
    option1: Optional[PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugDeployKeysRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams = field(default=None)
    security: PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity = field(default=None)
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugDeployKeysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deploy_key: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
