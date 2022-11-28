from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTeamsUsernamePermissionsRepositoriesPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesRequest:
    path_params: GetTeamsUsernamePermissionsRepositoriesPathParams = field()
    query_params: GetTeamsUsernamePermissionsRepositoriesQueryParams = field()
    security: GetTeamsUsernamePermissionsRepositoriesSecurity = field()
    

@dataclass
class GetTeamsUsernamePermissionsRepositoriesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_repository_permissions: Optional[shared.PaginatedRepositoryPermissions] = field(default=None)
    
