from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteWorkspacesWorkspaceHooksUIDPathParams:
    uid: str = field(default=None, metadata={'path_param': { 'field_name': 'uid', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkspacesWorkspaceHooksUIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteWorkspacesWorkspaceHooksUIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWorkspacesWorkspaceHooksUIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteWorkspacesWorkspaceHooksUIDSecurity:
    option1: Optional[DeleteWorkspacesWorkspaceHooksUIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteWorkspacesWorkspaceHooksUIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteWorkspacesWorkspaceHooksUIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteWorkspacesWorkspaceHooksUIDRequest:
    path_params: DeleteWorkspacesWorkspaceHooksUIDPathParams = field(default=None)
    security: DeleteWorkspacesWorkspaceHooksUIDSecurity = field(default=None)
    

@dataclass
class DeleteWorkspacesWorkspaceHooksUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
