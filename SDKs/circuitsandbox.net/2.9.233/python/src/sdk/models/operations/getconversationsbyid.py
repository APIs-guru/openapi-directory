from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetConversationsByIDQueryParams:
    conv_ids: List[str] = field(metadata={'query_param': { 'field_name': 'convIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationsByIDSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationsByIDRequest:
    query_params: GetConversationsByIDQueryParams = field()
    security: GetConversationsByIDSecurity = field()
    

@dataclass
class GetConversationsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversations: Optional[List[Any]] = field(default=None)
    
