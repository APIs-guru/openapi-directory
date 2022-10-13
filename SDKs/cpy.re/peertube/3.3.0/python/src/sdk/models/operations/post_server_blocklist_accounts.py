from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostServerBlocklistAccountsRequestBody:
    account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    

@dataclass
class PostServerBlocklistAccountsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostServerBlocklistAccountsRequest:
    request: Optional[PostServerBlocklistAccountsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostServerBlocklistAccountsSecurity = field(default=None)
    

@dataclass
class PostServerBlocklistAccountsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
