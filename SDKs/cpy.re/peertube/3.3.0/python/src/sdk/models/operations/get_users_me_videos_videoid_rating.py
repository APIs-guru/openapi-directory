from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersMeVideosVideoIDRatingPathParams:
    video_id: int = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersMeVideosVideoIDRatingSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeVideosVideoIDRatingRequest:
    path_params: GetUsersMeVideosVideoIDRatingPathParams = field(default=None)
    security: GetUsersMeVideosVideoIDRatingSecurity = field(default=None)
    

@dataclass
class GetUsersMeVideosVideoIDRatingResponse:
    content_type: str = field(default=None)
    get_me_video_rating: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
