from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostServerFollowingRequestBody:
    handles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handles') }})
    hosts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    

@dataclass
class PostServerFollowingSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostServerFollowingRequest:
    security: PostServerFollowingSecurity = field()
    request: Optional[PostServerFollowingRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostServerFollowingResponse:
    content_type: str = field()
    status_code: int = field()
    
