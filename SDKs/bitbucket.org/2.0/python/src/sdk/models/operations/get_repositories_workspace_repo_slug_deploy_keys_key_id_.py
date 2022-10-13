from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deploy_key: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
