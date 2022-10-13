from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoriesWorkspaceRepoSlugPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugQueryParams:
    redirect_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'redirect_to', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugSecurity:
    option1: Optional[DeleteRepositoriesWorkspaceRepoSlugSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteRepositoriesWorkspaceRepoSlugSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteRepositoriesWorkspaceRepoSlugSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRequest:
    path_params: DeleteRepositoriesWorkspaceRepoSlugPathParams = field(default=None)
    query_params: DeleteRepositoriesWorkspaceRepoSlugQueryParams = field(default=None)
    security: DeleteRepositoriesWorkspaceRepoSlugSecurity = field(default=None)
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
