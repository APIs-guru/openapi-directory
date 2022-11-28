from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SetUserPresenceRequestBody:
    state: str = field(metadata={'form': { 'field_name': 'state' }})
    clear_dnd: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'clearDND' }})
    dnd_until: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'dndUntil' }})
    status_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'statusMessage' }})
    

@dataclass
class SetUserPresenceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetUserPresenceRequest:
    request: SetUserPresenceRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: SetUserPresenceSecurity = field()
    

@dataclass
class SetUserPresenceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    presence: Optional[Any] = field(default=None)
    
