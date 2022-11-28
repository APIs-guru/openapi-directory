from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutAbusesAbuseIDPathParams:
    abuse_id: int = field(metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutAbusesAbuseIDRequestBody:
    moderation_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderationComment') }})
    state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass
class PutAbusesAbuseIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutAbusesAbuseIDRequest:
    path_params: PutAbusesAbuseIDPathParams = field()
    security: PutAbusesAbuseIDSecurity = field()
    request: Optional[PutAbusesAbuseIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAbusesAbuseIDResponse:
    content_type: str = field()
    status_code: int = field()
    
