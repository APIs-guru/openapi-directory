from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2EditOptionalConversationPathParams:
    conversation_id: int = field(metadata={'path_param': { 'field_name': 'conversationId', 'style': 'simple', 'explode': False }})
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2EditOptionalConversationSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2EditOptionalConversationRequest:
    path_params: GroupV2EditOptionalConversationPathParams = field()
    security: GroupV2EditOptionalConversationSecurity = field()
    

@dataclass
class GroupV2EditOptionalConversationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
