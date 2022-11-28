from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchLiveStreamsLiveStreamIDPathParams:
    live_stream_id: str = field(metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchLiveStreamsLiveStreamIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchLiveStreamsLiveStreamIDRequest:
    path_params: PatchLiveStreamsLiveStreamIDPathParams = field()
    security: PatchLiveStreamsLiveStreamIDSecurity = field()
    request: Optional[shared.LiveStreamUpdatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchLiveStreamsLiveStreamIDResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    live_stream: Optional[shared.LiveStream] = field(default=None)
    
