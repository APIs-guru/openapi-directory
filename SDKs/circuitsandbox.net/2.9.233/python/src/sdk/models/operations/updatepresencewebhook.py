from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class UpdatePresenceWebHookPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePresenceWebHookRequestBody:
    url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'url' }})
    user_ids: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'userIds' }})
    

@dataclass
class UpdatePresenceWebHookSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePresenceWebHookRequest:
    path_params: UpdatePresenceWebHookPathParams = field(default=None)
    request: Optional[UpdatePresenceWebHookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdatePresenceWebHookSecurity = field(default=None)
    

@dataclass
class UpdatePresenceWebHookResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
