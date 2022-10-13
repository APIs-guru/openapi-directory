from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserPermissionsRepositoriesQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserPermissionsRepositoriesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserPermissionsRepositoriesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUserPermissionsRepositoriesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUserPermissionsRepositoriesSecurity:
    option1: Optional[GetUserPermissionsRepositoriesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserPermissionsRepositoriesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUserPermissionsRepositoriesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserPermissionsRepositoriesRequest:
    query_params: GetUserPermissionsRepositoriesQueryParams = field(default=None)
    security: GetUserPermissionsRepositoriesSecurity = field(default=None)
    

@dataclass
class GetUserPermissionsRepositoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_repository_permissions: Optional[shared.PaginatedRepositoryPermissions] = field(default=None)
    
