from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTeamsUsernameHooksUIDPathParams:
    uid: str = field(metadata={'path_param': { 'field_name': 'uid', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernameHooksUIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernameHooksUIDRequest:
    path_params: GetTeamsUsernameHooksUIDPathParams = field()
    security: GetTeamsUsernameHooksUIDSecurity = field()
    

@dataclass
class GetTeamsUsernameHooksUIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = field(default=None)
    
