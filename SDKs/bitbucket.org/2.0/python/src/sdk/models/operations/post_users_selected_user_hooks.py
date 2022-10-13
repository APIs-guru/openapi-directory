from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostUsersSelectedUserHooksPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersSelectedUserHooksSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersSelectedUserHooksSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostUsersSelectedUserHooksSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUsersSelectedUserHooksSecurity:
    option1: Optional[PostUsersSelectedUserHooksSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostUsersSelectedUserHooksSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostUsersSelectedUserHooksSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostUsersSelectedUserHooksRequest:
    path_params: PostUsersSelectedUserHooksPathParams = field(default=None)
    security: PostUsersSelectedUserHooksSecurity = field(default=None)
    

@dataclass
class PostUsersSelectedUserHooksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = field(default=None)
    
