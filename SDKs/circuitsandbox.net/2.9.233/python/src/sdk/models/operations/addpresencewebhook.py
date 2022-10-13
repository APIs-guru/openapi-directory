from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AddPresenceWebHookRequestBody:
    url: str = field(default=None, metadata={'form': { 'field_name': 'url' }})
    user_ids: List[str] = field(default=None, metadata={'form': { 'field_name': 'userIds' }})
    

@dataclass
class AddPresenceWebHookSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddPresenceWebHookRequest:
    request: AddPresenceWebHookRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddPresenceWebHookSecurity = field(default=None)
    

@dataclass
class AddPresenceWebHookResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
