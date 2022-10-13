from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteLiveStreamsLiveStreamIDThumbnailPathParams:
    live_stream_id: str = field(default=None, metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLiveStreamsLiveStreamIDThumbnailSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteLiveStreamsLiveStreamIDThumbnailRequest:
    path_params: DeleteLiveStreamsLiveStreamIDThumbnailPathParams = field(default=None)
    security: DeleteLiveStreamsLiveStreamIDThumbnailSecurity = field(default=None)
    

@dataclass
class DeleteLiveStreamsLiveStreamIDThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    live_stream: Optional[shared.LiveStream] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
