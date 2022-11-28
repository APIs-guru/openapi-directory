from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostAbusesRequestBodyAccount:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostAbusesRequestBodyComment:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostAbusesRequestBodyVideo:
    end_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endAt') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    start_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startAt') }})
    

@dataclass_json
@dataclass
class PostAbusesRequestBody:
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    account: Optional[PostAbusesRequestBodyAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    comment: Optional[PostAbusesRequestBodyComment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    predefined_reasons: Optional[List[shared.PredefinedAbuseReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedReasons') }})
    video: Optional[PostAbusesRequestBodyVideo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    

@dataclass
class PostAbusesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class PostAbuses200ApplicationJSONAbuse:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostAbuses200ApplicationJSON:
    abuse: Optional[PostAbuses200ApplicationJSONAbuse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abuse') }})
    

@dataclass
class PostAbusesRequest:
    request: PostAbusesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAbusesSecurity = field()
    

@dataclass
class PostAbusesResponse:
    content_type: str = field()
    status_code: int = field()
    post_abuses_200_application_json_object: Optional[PostAbuses200ApplicationJSON] = field(default=None)
    
