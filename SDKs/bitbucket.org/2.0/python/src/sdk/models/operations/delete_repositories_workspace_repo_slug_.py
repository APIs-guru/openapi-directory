from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugQueryParams:
    redirect_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'redirect_to', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRequest:
    path_params: DeleteRepositoriesWorkspaceRepoSlugPathParams = field()
    query_params: DeleteRepositoriesWorkspaceRepoSlugQueryParams = field()
    security: DeleteRepositoriesWorkspaceRepoSlugSecurity = field()
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
