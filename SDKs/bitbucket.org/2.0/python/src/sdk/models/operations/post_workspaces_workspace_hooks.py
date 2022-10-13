from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostWorkspacesWorkspaceHooksPathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspacesWorkspaceHooksSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostWorkspacesWorkspaceHooksSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostWorkspacesWorkspaceHooksSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspacesWorkspaceHooksSecurity:
    option1: Optional[PostWorkspacesWorkspaceHooksSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostWorkspacesWorkspaceHooksSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostWorkspacesWorkspaceHooksSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostWorkspacesWorkspaceHooksRequest:
    path_params: PostWorkspacesWorkspaceHooksPathParams = field(default=None)
    security: PostWorkspacesWorkspaceHooksSecurity = field(default=None)
    

@dataclass
class PostWorkspacesWorkspaceHooksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = field(default=None)
    
