from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConversationbyIDPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConversationbyIDSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationbyIDRequest:
    path_params: GetConversationbyIDPathParams = field(default=None)
    security: GetConversationbyIDSecurity = field(default=None)
    

@dataclass
class GetConversationbyIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
