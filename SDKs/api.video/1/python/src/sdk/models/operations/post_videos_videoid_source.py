from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideosVideoIDSourcePathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDSourceHeaders:
    content_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDSourceSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideosVideoIDSourceRequest:
    headers: PostVideosVideoIDSourceHeaders = field()
    path_params: PostVideosVideoIDSourcePathParams = field()
    security: PostVideosVideoIDSourceSecurity = field()
    request: Optional[shared.VideoUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostVideosVideoIDSourceResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
