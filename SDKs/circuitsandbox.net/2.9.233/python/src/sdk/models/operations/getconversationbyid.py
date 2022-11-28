from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetConversationbyIDPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConversationbyIDSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationbyIDRequest:
    path_params: GetConversationbyIDPathParams = field()
    security: GetConversationbyIDSecurity = field()
    

@dataclass
class GetConversationbyIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
