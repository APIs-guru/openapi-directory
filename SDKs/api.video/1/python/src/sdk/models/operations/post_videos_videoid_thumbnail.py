from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideosVideoIDThumbnailPathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDThumbnailSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideosVideoIDThumbnailRequest:
    path_params: PostVideosVideoIDThumbnailPathParams = field()
    security: PostVideosVideoIDThumbnailSecurity = field()
    request: Optional[shared.VideoThumbnailUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostVideosVideoIDThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
