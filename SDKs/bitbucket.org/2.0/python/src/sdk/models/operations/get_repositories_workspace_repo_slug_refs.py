from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugRefsPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugRefsQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugRefsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugRefsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugRefsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugRefsSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugRefsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugRefsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugRefsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugRefsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugRefsPathParams = field(default=None)
    query_params: GetRepositoriesWorkspaceRepoSlugRefsQueryParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugRefsSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugRefsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_refs: Optional[shared.PaginatedRefs] = field(default=None)
    
