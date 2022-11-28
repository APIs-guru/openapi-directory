from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateGroupConversationRequestBody:
    participants: List[str] = field(metadata={'form': { 'field_name': 'participants' }})
    topic: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'topic' }})
    

@dataclass
class CreateGroupConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateGroupConversationRequest:
    request: CreateGroupConversationRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateGroupConversationSecurity = field()
    

@dataclass
class CreateGroupConversationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
