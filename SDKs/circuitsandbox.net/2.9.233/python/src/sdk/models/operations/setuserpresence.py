from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class SetUserPresenceRequestBody:
    clear_dnd: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'clearDND' }})
    dnd_until: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'dndUntil' }})
    state: str = field(default=None, metadata={'form': { 'field_name': 'state' }})
    status_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'statusMessage' }})
    

@dataclass
class SetUserPresenceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetUserPresenceRequest:
    request: SetUserPresenceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: SetUserPresenceSecurity = field(default=None)
    

@dataclass
class SetUserPresenceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    presence: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
