from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostLiveStreamsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLiveStreamsRequest:
    security: PostLiveStreamsSecurity = field()
    request: Optional[shared.LiveStreamCreatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLiveStreamsResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    live_stream: Optional[shared.LiveStream] = field(default=None)
    
