from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateConversationGroupPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationGroupRequestBody:
    topic: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'topic' }})
    

@dataclass
class UpdateConversationGroupSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateConversationGroupRequest:
    path_params: UpdateConversationGroupPathParams = field(default=None)
    request: Optional[UpdateConversationGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConversationGroupSecurity = field(default=None)
    

@dataclass
class UpdateConversationGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
