from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams:
    project_key: str = field(default=None, metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteWorkspacesWorkspaceProjectsProjectKeySecurity:
    option1: Optional[DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteWorkspacesWorkspaceProjectsProjectKeyRequest:
    path_params: DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams = field(default=None)
    security: DeleteWorkspacesWorkspaceProjectsProjectKeySecurity = field(default=None)
    

@dataclass
class DeleteWorkspacesWorkspaceProjectsProjectKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
