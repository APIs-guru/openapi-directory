from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostServerBlocklistServersRequestBody:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    

@dataclass
class PostServerBlocklistServersSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostServerBlocklistServersRequest:
    request: Optional[PostServerBlocklistServersRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostServerBlocklistServersSecurity = field(default=None)
    

@dataclass
class PostServerBlocklistServersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
