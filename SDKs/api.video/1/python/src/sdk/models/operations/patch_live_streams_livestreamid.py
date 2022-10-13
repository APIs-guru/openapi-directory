from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchLiveStreamsLiveStreamIDPathParams:
    live_stream_id: str = field(default=None, metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchLiveStreamsLiveStreamIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchLiveStreamsLiveStreamIDRequest:
    path_params: PatchLiveStreamsLiveStreamIDPathParams = field(default=None)
    request: Optional[shared.LiveStreamUpdatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchLiveStreamsLiveStreamIDSecurity = field(default=None)
    

@dataclass
class PatchLiveStreamsLiveStreamIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    live_stream: Optional[shared.LiveStream] = field(default=None)
    
