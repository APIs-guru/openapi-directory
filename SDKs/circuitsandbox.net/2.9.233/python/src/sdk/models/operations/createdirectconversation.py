from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CreateDirectConversationRequestBody:
    participant: str = field(default=None, metadata={'form': { 'field_name': 'participant' }})
    

@dataclass
class CreateDirectConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateDirectConversationRequest:
    request: CreateDirectConversationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDirectConversationSecurity = field(default=None)
    

@dataclass
class CreateDirectConversationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
