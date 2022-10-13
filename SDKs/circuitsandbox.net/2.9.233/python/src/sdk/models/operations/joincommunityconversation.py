from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class JoinCommunityConversationPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class JoinCommunityConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class JoinCommunityConversationRequest:
    path_params: JoinCommunityConversationPathParams = field(default=None)
    security: JoinCommunityConversationSecurity = field(default=None)
    

@dataclass
class JoinCommunityConversationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
