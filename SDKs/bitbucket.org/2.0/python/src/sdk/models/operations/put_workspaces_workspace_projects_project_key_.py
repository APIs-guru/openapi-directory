from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PutWorkspacesWorkspaceProjectsProjectKeyPathParams:
    project_key: str = field(default=None, metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWorkspacesWorkspaceProjectsProjectKeySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutWorkspacesWorkspaceProjectsProjectKeySecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutWorkspacesWorkspaceProjectsProjectKeySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutWorkspacesWorkspaceProjectsProjectKeySecurity:
    option1: Optional[PutWorkspacesWorkspaceProjectsProjectKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutWorkspacesWorkspaceProjectsProjectKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutWorkspacesWorkspaceProjectsProjectKeySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutWorkspacesWorkspaceProjectsProjectKeyRequest:
    path_params: PutWorkspacesWorkspaceProjectsProjectKeyPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutWorkspacesWorkspaceProjectsProjectKeySecurity = field(default=None)
    

@dataclass
class PutWorkspacesWorkspaceProjectsProjectKeyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    project: Optional[dict[str, Any]] = field(default=None)
    
