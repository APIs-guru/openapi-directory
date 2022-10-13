from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutVideosIDRatePathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PutVideosIDRateRequestBodyRatingEnum(str, Enum):
    LIKE = "like"
    DISLIKE = "dislike"


@dataclass_json
@dataclass
class PutVideosIDRateRequestBody:
    rating: PutVideosIDRateRequestBodyRatingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    

@dataclass
class PutVideosIDRateSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutVideosIDRateRequest:
    path_params: PutVideosIDRatePathParams = field(default=None)
    request: Optional[PutVideosIDRateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutVideosIDRateSecurity = field(default=None)
    

@dataclass
class PutVideosIDRateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
