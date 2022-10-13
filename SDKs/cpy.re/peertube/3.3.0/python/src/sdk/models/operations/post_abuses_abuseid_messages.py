from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass
class PostAbusesAbuseIDMessagesPathParams:
    abuse_id: int = field(default=None, metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostAbusesAbuseIDMessagesRequestBody:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostAbusesAbuseIDMessagesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostAbusesAbuseIDMessagesRequest:
    path_params: PostAbusesAbuseIDMessagesPathParams = field(default=None)
    request: PostAbusesAbuseIDMessagesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAbusesAbuseIDMessagesSecurity = field(default=None)
    

@dataclass
class PostAbusesAbuseIDMessagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
