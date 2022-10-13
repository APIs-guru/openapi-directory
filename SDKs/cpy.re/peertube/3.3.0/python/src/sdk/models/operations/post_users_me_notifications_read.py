from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostUsersMeNotificationsReadRequestBody:
    ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class PostUsersMeNotificationsReadSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersMeNotificationsReadRequest:
    request: Optional[PostUsersMeNotificationsReadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostUsersMeNotificationsReadSecurity = field(default=None)
    

@dataclass
class PostUsersMeNotificationsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
