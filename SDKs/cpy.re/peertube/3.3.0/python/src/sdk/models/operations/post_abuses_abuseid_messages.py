from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostAbusesAbuseIDMessagesPathParams:
    abuse_id: int = field(metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostAbusesAbuseIDMessagesRequestBody:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostAbusesAbuseIDMessagesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostAbusesAbuseIDMessagesRequest:
    path_params: PostAbusesAbuseIDMessagesPathParams = field()
    request: PostAbusesAbuseIDMessagesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAbusesAbuseIDMessagesSecurity = field()
    

@dataclass
class PostAbusesAbuseIDMessagesResponse:
    content_type: str = field()
    status_code: int = field()
    
