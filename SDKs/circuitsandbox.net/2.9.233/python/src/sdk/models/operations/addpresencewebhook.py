from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class AddPresenceWebHookRequestBody:
    url: str = field(metadata={'form': { 'field_name': 'url' }})
    user_ids: List[str] = field(metadata={'form': { 'field_name': 'userIds' }})
    

@dataclass
class AddPresenceWebHookSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddPresenceWebHookRequest:
    request: AddPresenceWebHookRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddPresenceWebHookSecurity = field()
    

@dataclass
class AddPresenceWebHookResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
