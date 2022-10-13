from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateGroupConversationRequestBody:
    participants: List[str] = field(default=None, metadata={'form': { 'field_name': 'participants' }})
    topic: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'topic' }})
    

@dataclass
class CreateGroupConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateGroupConversationRequest:
    request: CreateGroupConversationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateGroupConversationSecurity = field(default=None)
    

@dataclass
class CreateGroupConversationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
