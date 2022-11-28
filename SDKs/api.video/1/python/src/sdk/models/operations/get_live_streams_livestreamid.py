from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLiveStreamsLiveStreamIDPathParams:
    live_stream_id: str = field(metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLiveStreamsLiveStreamIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLiveStreamsLiveStreamIDRequest:
    path_params: GetLiveStreamsLiveStreamIDPathParams = field()
    security: GetLiveStreamsLiveStreamIDSecurity = field()
    

@dataclass
class GetLiveStreamsLiveStreamIDResponse:
    content_type: str = field()
    status_code: int = field()
    live_stream: Optional[shared.LiveStream] = field(default=None)
    
