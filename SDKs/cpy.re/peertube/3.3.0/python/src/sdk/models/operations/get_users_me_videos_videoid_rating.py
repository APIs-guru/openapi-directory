from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersMeVideosVideoIDRatingPathParams:
    video_id: int = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersMeVideosVideoIDRatingSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeVideosVideoIDRatingRequest:
    path_params: GetUsersMeVideosVideoIDRatingPathParams = field()
    security: GetUsersMeVideosVideoIDRatingSecurity = field()
    

@dataclass
class GetUsersMeVideosVideoIDRatingResponse:
    content_type: str = field()
    status_code: int = field()
    get_me_video_rating: Optional[Any] = field(default=None)
    
