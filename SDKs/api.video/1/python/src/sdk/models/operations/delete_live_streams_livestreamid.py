from dataclasses import dataclass, field



@dataclass
class DeleteLiveStreamsLiveStreamIDPathParams:
    live_stream_id: str = field(default=None, metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLiveStreamsLiveStreamIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteLiveStreamsLiveStreamIDRequest:
    path_params: DeleteLiveStreamsLiveStreamIDPathParams = field(default=None)
    security: DeleteLiveStreamsLiveStreamIDSecurity = field(default=None)
    

@dataclass
class DeleteLiveStreamsLiveStreamIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
