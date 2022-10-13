from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class PostAbusesRequestBodyAccount:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostAbusesRequestBodyComment:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostAbusesRequestBodyVideo:
    end_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endAt' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    start_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAt' }})
    

@dataclass_json
@dataclass
class PostAbusesRequestBody:
    account: Optional[PostAbusesRequestBodyAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    comment: Optional[PostAbusesRequestBodyComment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    predefined_reasons: Optional[List[shared.PredefinedAbuseReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedReasons' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    video: Optional[PostAbusesRequestBodyVideo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    

@dataclass
class PostAbusesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostAbusesRequest:
    request: PostAbusesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAbusesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostAbuses200ApplicationJSONAbuse:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostAbuses200ApplicationJSON:
    abuse: Optional[PostAbuses200ApplicationJSONAbuse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abuse' }})
    

@dataclass
class PostAbusesResponse:
    content_type: str = field(default=None)
    post_abuses_200_application_json_object: Optional[PostAbuses200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
