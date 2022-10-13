from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWorkspacesWorkspacePathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWorkspacesWorkspaceSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWorkspacesWorkspaceSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesWorkspaceSecurity:
    option1: Optional[GetWorkspacesWorkspaceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetWorkspacesWorkspaceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetWorkspacesWorkspaceSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetWorkspacesWorkspaceRequest:
    path_params: GetWorkspacesWorkspacePathParams = field(default=None)
    security: GetWorkspacesWorkspaceSecurity = field(default=None)
    

@dataclass
class GetWorkspacesWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    workspace: Optional[dict[str, Any]] = field(default=None)
    
