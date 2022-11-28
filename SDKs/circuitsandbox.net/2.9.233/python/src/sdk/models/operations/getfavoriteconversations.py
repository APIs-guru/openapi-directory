from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFavoriteConversationsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFavoriteConversationsRequest:
    security: GetFavoriteConversationsSecurity = field()
    

@dataclass
class GetFavoriteConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
