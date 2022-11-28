from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchVideosVideoIDThumbnailPathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVideosVideoIDThumbnailSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchVideosVideoIDThumbnailRequest:
    path_params: PatchVideosVideoIDThumbnailPathParams = field()
    security: PatchVideosVideoIDThumbnailSecurity = field()
    request: Optional[shared.VideoThumbnailPickPayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchVideosVideoIDThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
