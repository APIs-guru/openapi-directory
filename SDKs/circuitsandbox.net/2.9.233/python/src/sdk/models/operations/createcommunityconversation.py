from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateCommunityConversationRequestBody:
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    participants: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'participants' }})
    topic: str = field(default=None, metadata={'form': { 'field_name': 'topic' }})
    

@dataclass
class CreateCommunityConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCommunityConversationRequest:
    request: Optional[CreateCommunityConversationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCommunityConversationSecurity = field(default=None)
    

@dataclass
class CreateCommunityConversationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
