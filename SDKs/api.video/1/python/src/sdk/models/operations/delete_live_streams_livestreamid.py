from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteLiveStreamsLiveStreamIDPathParams:
    live_stream_id: str = field(metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLiveStreamsLiveStreamIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteLiveStreamsLiveStreamIDRequest:
    path_params: DeleteLiveStreamsLiveStreamIDPathParams = field()
    security: DeleteLiveStreamsLiveStreamIDSecurity = field()
    

@dataclass
class DeleteLiveStreamsLiveStreamIDResponse:
    content_type: str = field()
    status_code: int = field()
    
