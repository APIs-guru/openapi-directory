from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity:
    option1: Optional[DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest:
    path_params: DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams = field(default=None)
    security: DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity = field(default=None)
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
