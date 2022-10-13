from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostWorkspacesWorkspaceProjectsPathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspacesWorkspaceProjectsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostWorkspacesWorkspaceProjectsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostWorkspacesWorkspaceProjectsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspacesWorkspaceProjectsSecurity:
    option1: Optional[PostWorkspacesWorkspaceProjectsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostWorkspacesWorkspaceProjectsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostWorkspacesWorkspaceProjectsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostWorkspacesWorkspaceProjectsRequest:
    path_params: PostWorkspacesWorkspaceProjectsPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostWorkspacesWorkspaceProjectsSecurity = field(default=None)
    

@dataclass
class PostWorkspacesWorkspaceProjectsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    project: Optional[dict[str, Any]] = field(default=None)
    
