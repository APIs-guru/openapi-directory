from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetWorkspacesWorkspaceHooksPathParams:
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceHooksSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWorkspacesWorkspaceHooksRequest:
    path_params: GetWorkspacesWorkspaceHooksPathParams = field()
    security: GetWorkspacesWorkspaceHooksSecurity = field()
    

@dataclass
class GetWorkspacesWorkspaceHooksResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_webhook_subscriptions: Optional[shared.PaginatedWebhookSubscriptions] = field(default=None)
    
