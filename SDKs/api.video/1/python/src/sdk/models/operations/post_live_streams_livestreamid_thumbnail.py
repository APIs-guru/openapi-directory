from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostLiveStreamsLiveStreamIDThumbnailPathParams:
    live_stream_id: str = field(default=None, metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLiveStreamsLiveStreamIDThumbnailSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLiveStreamsLiveStreamIDThumbnailRequest:
    path_params: PostLiveStreamsLiveStreamIDThumbnailPathParams = field(default=None)
    request: Optional[shared.LiveStreamThumbnailUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostLiveStreamsLiveStreamIDThumbnailSecurity = field(default=None)
    

@dataclass
class PostLiveStreamsLiveStreamIDThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    live_stream: Optional[shared.LiveStream] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
