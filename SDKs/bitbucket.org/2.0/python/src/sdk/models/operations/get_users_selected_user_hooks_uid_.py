from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersSelectedUserHooksUIDPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    uid: str = field(default=None, metadata={'path_param': { 'field_name': 'uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersSelectedUserHooksUIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersSelectedUserHooksUIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUsersSelectedUserHooksUIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUsersSelectedUserHooksUIDSecurity:
    option1: Optional[GetUsersSelectedUserHooksUIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUsersSelectedUserHooksUIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUsersSelectedUserHooksUIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUsersSelectedUserHooksUIDRequest:
    path_params: GetUsersSelectedUserHooksUIDPathParams = field(default=None)
    security: GetUsersSelectedUserHooksUIDSecurity = field(default=None)
    

@dataclass
class GetUsersSelectedUserHooksUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = field(default=None)
    
