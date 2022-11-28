from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostLiveStreamsLiveStreamIDThumbnailPathParams:
    live_stream_id: str = field(metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLiveStreamsLiveStreamIDThumbnailSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLiveStreamsLiveStreamIDThumbnailRequest:
    path_params: PostLiveStreamsLiveStreamIDThumbnailPathParams = field()
    security: PostLiveStreamsLiveStreamIDThumbnailSecurity = field()
    request: Optional[shared.LiveStreamThumbnailUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostLiveStreamsLiveStreamIDThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    live_stream: Optional[shared.LiveStream] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
