from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutWorkspacesWorkspaceHooksUIDPathParams:
    uid: str = field(default=None, metadata={'path_param': { 'field_name': 'uid', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWorkspacesWorkspaceHooksUIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutWorkspacesWorkspaceHooksUIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutWorkspacesWorkspaceHooksUIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutWorkspacesWorkspaceHooksUIDSecurity:
    option1: Optional[PutWorkspacesWorkspaceHooksUIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutWorkspacesWorkspaceHooksUIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutWorkspacesWorkspaceHooksUIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutWorkspacesWorkspaceHooksUIDRequest:
    path_params: PutWorkspacesWorkspaceHooksUIDPathParams = field(default=None)
    security: PutWorkspacesWorkspaceHooksUIDSecurity = field(default=None)
    

@dataclass
class PutWorkspacesWorkspaceHooksUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = field(default=None)
    
