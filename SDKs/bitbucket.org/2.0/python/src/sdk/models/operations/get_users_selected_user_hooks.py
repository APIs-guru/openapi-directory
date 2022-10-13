from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersSelectedUserHooksPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersSelectedUserHooksSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersSelectedUserHooksSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUsersSelectedUserHooksSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUsersSelectedUserHooksSecurity:
    option1: Optional[GetUsersSelectedUserHooksSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUsersSelectedUserHooksSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUsersSelectedUserHooksSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUsersSelectedUserHooksRequest:
    path_params: GetUsersSelectedUserHooksPathParams = field(default=None)
    security: GetUsersSelectedUserHooksSecurity = field(default=None)
    

@dataclass
class GetUsersSelectedUserHooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_webhook_subscriptions: Optional[shared.PaginatedWebhookSubscriptions] = field(default=None)
    
