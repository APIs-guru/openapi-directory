from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity:
    option1: Optional[GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest:
    path_params: GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams = field(default=None)
    query_params: GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams = field(default=None)
    security: GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity = field(default=None)
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_repository_permissions: Optional[shared.PaginatedRepositoryPermissions] = field(default=None)
    
