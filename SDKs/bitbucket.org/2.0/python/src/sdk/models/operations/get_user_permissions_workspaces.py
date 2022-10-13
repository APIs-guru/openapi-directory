from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUserPermissionsWorkspacesQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserPermissionsWorkspacesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserPermissionsWorkspacesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUserPermissionsWorkspacesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUserPermissionsWorkspacesSecurity:
    option1: Optional[GetUserPermissionsWorkspacesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserPermissionsWorkspacesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUserPermissionsWorkspacesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserPermissionsWorkspacesRequest:
    query_params: GetUserPermissionsWorkspacesQueryParams = field(default=None)
    security: GetUserPermissionsWorkspacesSecurity = field(default=None)
    

@dataclass
class GetUserPermissionsWorkspacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_workspace_memberships: Optional[shared.PaginatedWorkspaceMemberships] = field(default=None)
    
