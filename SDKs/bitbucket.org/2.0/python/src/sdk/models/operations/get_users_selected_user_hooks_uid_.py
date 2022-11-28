from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersSelectedUserHooksUIDPathParams:
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    uid: str = field(metadata={'path_param': { 'field_name': 'uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersSelectedUserHooksUIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersSelectedUserHooksUIDRequest:
    path_params: GetUsersSelectedUserHooksUIDPathParams = field()
    security: GetUsersSelectedUserHooksUIDSecurity = field()
    

@dataclass
class GetUsersSelectedUserHooksUIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = field(default=None)
    
