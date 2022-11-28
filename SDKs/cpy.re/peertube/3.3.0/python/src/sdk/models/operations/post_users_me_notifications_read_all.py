from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostUsersMeNotificationsReadAllSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersMeNotificationsReadAllRequest:
    security: PostUsersMeNotificationsReadAllSecurity = field()
    

@dataclass
class PostUsersMeNotificationsReadAllResponse:
    content_type: str = field()
    status_code: int = field()
    
