from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetPinnedConversationsPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPinnedConversationsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPinnedConversationsRequest:
    path_params: GetPinnedConversationsPathParams = field()
    security: GetPinnedConversationsSecurity = field()
    

@dataclass
class GetPinnedConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pinned_topics: Optional[List[Any]] = field(default=None)
    
