from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetWorkspacesWorkspaceHooksPathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceHooksSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWorkspacesWorkspaceHooksSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWorkspacesWorkspaceHooksSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesWorkspaceHooksSecurity:
    option1: Optional[GetWorkspacesWorkspaceHooksSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetWorkspacesWorkspaceHooksSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetWorkspacesWorkspaceHooksSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetWorkspacesWorkspaceHooksRequest:
    path_params: GetWorkspacesWorkspaceHooksPathParams = field(default=None)
    security: GetWorkspacesWorkspaceHooksSecurity = field(default=None)
    

@dataclass
class GetWorkspacesWorkspaceHooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_webhook_subscriptions: Optional[shared.PaginatedWebhookSubscriptions] = field(default=None)
    
