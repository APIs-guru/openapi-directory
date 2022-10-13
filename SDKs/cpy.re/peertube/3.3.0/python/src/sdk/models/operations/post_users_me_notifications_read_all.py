from dataclasses import dataclass, field



@dataclass
class PostUsersMeNotificationsReadAllSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersMeNotificationsReadAllRequest:
    security: PostUsersMeNotificationsReadAllSecurity = field(default=None)
    

@dataclass
class PostUsersMeNotificationsReadAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
