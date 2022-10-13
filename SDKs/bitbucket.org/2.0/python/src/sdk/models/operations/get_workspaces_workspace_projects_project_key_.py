from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWorkspacesWorkspaceProjectsProjectKeyPathParams:
    project_key: str = field(default=None, metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceProjectsProjectKeySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWorkspacesWorkspaceProjectsProjectKeySecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWorkspacesWorkspaceProjectsProjectKeySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesWorkspaceProjectsProjectKeySecurity:
    option1: Optional[GetWorkspacesWorkspaceProjectsProjectKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetWorkspacesWorkspaceProjectsProjectKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetWorkspacesWorkspaceProjectsProjectKeySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetWorkspacesWorkspaceProjectsProjectKeyRequest:
    path_params: GetWorkspacesWorkspaceProjectsProjectKeyPathParams = field(default=None)
    security: GetWorkspacesWorkspaceProjectsProjectKeySecurity = field(default=None)
    

@dataclass
class GetWorkspacesWorkspaceProjectsProjectKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    project: Optional[dict[str, Any]] = field(default=None)
    
