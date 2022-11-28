from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams:
    key_id: str = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams = field()
    security: GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse:
    content_type: str = field()
    status_code: int = field()
    deploy_key: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
