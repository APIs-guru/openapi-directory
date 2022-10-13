from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideosVideoIDSourcePathParams:
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDSourceHeaders:
    content_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDSourceSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideosVideoIDSourceRequest:
    path_params: PostVideosVideoIDSourcePathParams = field(default=None)
    headers: PostVideosVideoIDSourceHeaders = field(default=None)
    request: Optional[shared.VideoUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostVideosVideoIDSourceSecurity = field(default=None)
    

@dataclass
class PostVideosVideoIDSourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
