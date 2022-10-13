from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostServerFollowingRequestBody:
    handles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handles' }})
    hosts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hosts' }})
    

@dataclass
class PostServerFollowingSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostServerFollowingRequest:
    request: Optional[PostServerFollowingRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostServerFollowingSecurity = field(default=None)
    

@dataclass
class PostServerFollowingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
