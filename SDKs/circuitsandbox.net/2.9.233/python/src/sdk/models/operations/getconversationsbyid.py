from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetConversationsByIDQueryParams:
    conv_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'convIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationsByIDSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationsByIDRequest:
    query_params: GetConversationsByIDQueryParams = field(default=None)
    security: GetConversationsByIDSecurity = field(default=None)
    

@dataclass
class GetConversationsByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversations: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
