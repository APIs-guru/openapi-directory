from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersSelectedUserHooksPathParams:
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersSelectedUserHooksSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersSelectedUserHooksRequest:
    path_params: GetUsersSelectedUserHooksPathParams = field()
    security: GetUsersSelectedUserHooksSecurity = field()
    

@dataclass
class GetUsersSelectedUserHooksResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_webhook_subscriptions: Optional[shared.PaginatedWebhookSubscriptions] = field(default=None)
    
