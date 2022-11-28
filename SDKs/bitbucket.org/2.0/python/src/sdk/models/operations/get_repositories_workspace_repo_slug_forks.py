from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugForksPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugForksRoleEnum(str, Enum):
    ADMIN = "admin"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"
    OWNER = "owner"


@dataclass
class GetRepositoriesWorkspaceRepoSlugForksQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[GetRepositoriesWorkspaceRepoSlugForksRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugForksSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugForksRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugForksPathParams = field()
    query_params: GetRepositoriesWorkspaceRepoSlugForksQueryParams = field()
    security: GetRepositoriesWorkspaceRepoSlugForksSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugForksResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_repositories: Optional[shared.PaginatedRepositories] = field(default=None)
    
