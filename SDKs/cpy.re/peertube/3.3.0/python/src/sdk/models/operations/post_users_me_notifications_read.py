from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostUsersMeNotificationsReadRequestBody:
    ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclass
class PostUsersMeNotificationsReadSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersMeNotificationsReadRequest:
    security: PostUsersMeNotificationsReadSecurity = field()
    request: Optional[PostUsersMeNotificationsReadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersMeNotificationsReadResponse:
    content_type: str = field()
    status_code: int = field()
    
