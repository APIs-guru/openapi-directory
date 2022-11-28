from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest:
    path_params: GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams = field()
    query_params: GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams = field()
    security: GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity = field()
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_repository_permissions: Optional[shared.PaginatedRepositoryPermissions] = field(default=None)
    
