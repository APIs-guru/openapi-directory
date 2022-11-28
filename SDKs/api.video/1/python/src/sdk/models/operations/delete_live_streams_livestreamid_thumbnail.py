from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteLiveStreamsLiveStreamIDThumbnailPathParams:
    live_stream_id: str = field(metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLiveStreamsLiveStreamIDThumbnailSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteLiveStreamsLiveStreamIDThumbnailRequest:
    path_params: DeleteLiveStreamsLiveStreamIDThumbnailPathParams = field()
    security: DeleteLiveStreamsLiveStreamIDThumbnailSecurity = field()
    

@dataclass
class DeleteLiveStreamsLiveStreamIDThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    live_stream: Optional[shared.LiveStream] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
