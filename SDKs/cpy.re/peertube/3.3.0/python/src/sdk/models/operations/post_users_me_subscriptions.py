from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostUsersMeSubscriptionsRequestBody:
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class PostUsersMeSubscriptionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersMeSubscriptionsRequest:
    request: Optional[PostUsersMeSubscriptionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostUsersMeSubscriptionsSecurity = field(default=None)
    

@dataclass
class PostUsersMeSubscriptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
