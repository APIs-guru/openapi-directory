from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideoPathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideoRequest:
    path_params: GetVideoPathParams = field()
    security: GetVideoSecurity = field()
    

@dataclass
class GetVideoResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
