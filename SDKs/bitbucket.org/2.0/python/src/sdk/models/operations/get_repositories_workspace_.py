from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspacePathParams:
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRoleEnum(str, Enum):
    ADMIN = "admin"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"
    OWNER = "owner"


@dataclass
class GetRepositoriesWorkspaceQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[GetRepositoriesWorkspaceRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRequest:
    path_params: GetRepositoriesWorkspacePathParams = field()
    query_params: GetRepositoriesWorkspaceQueryParams = field()
    security: GetRepositoriesWorkspaceSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_repositories: Optional[shared.PaginatedRepositories] = field(default=None)
    
