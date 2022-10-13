from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostTeamsUsernameHooksPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsUsernameHooksSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostTeamsUsernameHooksSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostTeamsUsernameHooksSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostTeamsUsernameHooksSecurity:
    option1: Optional[PostTeamsUsernameHooksSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostTeamsUsernameHooksSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostTeamsUsernameHooksSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostTeamsUsernameHooksRequest:
    path_params: PostTeamsUsernameHooksPathParams = field(default=None)
    security: PostTeamsUsernameHooksSecurity = field(default=None)
    

@dataclass
class PostTeamsUsernameHooksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = field(default=None)
    
