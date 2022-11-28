from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdatePresenceWebHookPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePresenceWebHookRequestBody:
    url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'url' }})
    user_ids: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'userIds' }})
    

@dataclass
class UpdatePresenceWebHookSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePresenceWebHookRequest:
    path_params: UpdatePresenceWebHookPathParams = field()
    security: UpdatePresenceWebHookSecurity = field()
    request: Optional[UpdatePresenceWebHookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdatePresenceWebHookResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
