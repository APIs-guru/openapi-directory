from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateDirectConversationRequestBody:
    participant: str = field(metadata={'form': { 'field_name': 'participant' }})
    

@dataclass
class CreateDirectConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateDirectConversationRequest:
    request: CreateDirectConversationRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDirectConversationSecurity = field()
    

@dataclass
class CreateDirectConversationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
