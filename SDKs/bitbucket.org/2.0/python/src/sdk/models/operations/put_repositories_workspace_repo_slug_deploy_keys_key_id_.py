from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity:
    option1: Optional[PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest:
    path_params: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams = field(default=None)
    security: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity = field(default=None)
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deploy_key: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
