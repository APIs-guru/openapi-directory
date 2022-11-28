from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostUsersMeSubscriptionsRequestBody:
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class PostUsersMeSubscriptionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersMeSubscriptionsRequest:
    security: PostUsersMeSubscriptionsSecurity = field()
    request: Optional[PostUsersMeSubscriptionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersMeSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    
