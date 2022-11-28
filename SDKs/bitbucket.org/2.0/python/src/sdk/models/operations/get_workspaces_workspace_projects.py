from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetWorkspacesWorkspaceProjectsPathParams:
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceProjectsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWorkspacesWorkspaceProjectsRequest:
    path_params: GetWorkspacesWorkspaceProjectsPathParams = field()
    security: GetWorkspacesWorkspaceProjectsSecurity = field()
    

@dataclass
class GetWorkspacesWorkspaceProjectsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_projects: Optional[shared.PaginatedProjects] = field(default=None)
    
