from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2EditOptionalConversationPathParams:
    conversation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'conversationId', 'style': 'simple', 'explode': False }})
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2EditOptionalConversationSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2EditOptionalConversationRequest:
    path_params: GroupV2EditOptionalConversationPathParams = field(default=None)
    security: GroupV2EditOptionalConversationSecurity = field(default=None)
    

@dataclass
class GroupV2EditOptionalConversationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
