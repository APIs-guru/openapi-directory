from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideosVideoIDThumbnailPathParams:
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDThumbnailSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideosVideoIDThumbnailRequest:
    path_params: PostVideosVideoIDThumbnailPathParams = field(default=None)
    request: Optional[shared.VideoThumbnailUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostVideosVideoIDThumbnailSecurity = field(default=None)
    

@dataclass
class PostVideosVideoIDThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
