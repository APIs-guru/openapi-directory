from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDirectConversationQueryParams:
    participant: str = field(default=None, metadata={'query_param': { 'field_name': 'participant', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDirectConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDirectConversationRequest:
    query_params: GetDirectConversationQueryParams = field(default=None)
    security: GetDirectConversationSecurity = field(default=None)
    

@dataclass
class GetDirectConversationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
