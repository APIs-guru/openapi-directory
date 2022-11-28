from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class JoinCommunityConversationPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class JoinCommunityConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class JoinCommunityConversationRequest:
    path_params: JoinCommunityConversationPathParams = field()
    security: JoinCommunityConversationSecurity = field()
    

@dataclass
class JoinCommunityConversationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
