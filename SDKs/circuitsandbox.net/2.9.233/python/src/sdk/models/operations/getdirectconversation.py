from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetDirectConversationQueryParams:
    participant: str = field(metadata={'query_param': { 'field_name': 'participant', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDirectConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDirectConversationRequest:
    query_params: GetDirectConversationQueryParams = field()
    security: GetDirectConversationSecurity = field()
    

@dataclass
class GetDirectConversationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
