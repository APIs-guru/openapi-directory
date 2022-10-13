from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLiveStreamsLiveStreamIDPathParams:
    live_stream_id: str = field(default=None, metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLiveStreamsLiveStreamIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLiveStreamsLiveStreamIDRequest:
    path_params: GetLiveStreamsLiveStreamIDPathParams = field(default=None)
    security: GetLiveStreamsLiveStreamIDSecurity = field(default=None)
    

@dataclass
class GetLiveStreamsLiveStreamIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    live_stream: Optional[shared.LiveStream] = field(default=None)
    
