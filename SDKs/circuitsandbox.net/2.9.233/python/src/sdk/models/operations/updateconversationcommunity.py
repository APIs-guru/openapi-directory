from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateConversationCommunityPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationCommunityRequestBody:
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    topic: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'topic' }})
    

@dataclass
class UpdateConversationCommunitySecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateConversationCommunityRequest:
    path_params: UpdateConversationCommunityPathParams = field(default=None)
    request: Optional[UpdateConversationCommunityRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConversationCommunitySecurity = field(default=None)
    

@dataclass
class UpdateConversationCommunityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
