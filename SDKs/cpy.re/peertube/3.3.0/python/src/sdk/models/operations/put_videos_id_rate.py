from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutVideosIDRatePathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PutVideosIDRateRequestBodyRatingEnum(str, Enum):
    LIKE = "like"
    DISLIKE = "dislike"


@dataclass_json
@dataclass
class PutVideosIDRateRequestBody:
    rating: PutVideosIDRateRequestBodyRatingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    

@dataclass
class PutVideosIDRateSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutVideosIDRateRequest:
    path_params: PutVideosIDRatePathParams = field()
    security: PutVideosIDRateSecurity = field()
    request: Optional[PutVideosIDRateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutVideosIDRateResponse:
    content_type: str = field()
    status_code: int = field()
    
