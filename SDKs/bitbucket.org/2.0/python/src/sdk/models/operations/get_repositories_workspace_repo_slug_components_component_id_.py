from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugComponentsComponentIDPathParams:
    component_id: int = field(metadata={'path_param': { 'field_name': 'component_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugComponentsComponentIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugComponentsComponentIDPathParams = field()
    security: GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugComponentsComponentIDResponse:
    content_type: str = field()
    status_code: int = field()
    component: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
