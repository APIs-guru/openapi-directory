from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostSnippetsWorkspacePathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSnippetsWorkspaceSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostSnippetsWorkspaceSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostSnippetsWorkspaceSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostSnippetsWorkspaceSecurity:
    option1: Optional[PostSnippetsWorkspaceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostSnippetsWorkspaceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostSnippetsWorkspaceSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostSnippetsWorkspaceRequest:
    path_params: PostSnippetsWorkspacePathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostSnippetsWorkspaceSecurity = field(default=None)
    

@dataclass
class PostSnippetsWorkspaceResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    snippet: Optional[dict[str, Any]] = field(default=None)
    
