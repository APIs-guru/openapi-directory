from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateCommunityConversationRequestBody:
    topic: str = field(metadata={'form': { 'field_name': 'topic' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    participants: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'participants' }})
    

@dataclass
class CreateCommunityConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCommunityConversationRequest:
    security: CreateCommunityConversationSecurity = field()
    request: Optional[CreateCommunityConversationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CreateCommunityConversationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
