from dataclasses import dataclass, field



@dataclass
class GetFavoriteConversationsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFavoriteConversationsRequest:
    security: GetFavoriteConversationsSecurity = field(default=None)
    

@dataclass
class GetFavoriteConversationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
