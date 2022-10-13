from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetPinnedConversationsPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPinnedConversationsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPinnedConversationsRequest:
    path_params: GetPinnedConversationsPathParams = field(default=None)
    security: GetPinnedConversationsSecurity = field(default=None)
    

@dataclass
class GetPinnedConversationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pinned_topics: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
