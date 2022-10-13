from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostLiveStreamsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLiveStreamsRequest:
    request: Optional[shared.LiveStreamCreatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostLiveStreamsSecurity = field(default=None)
    

@dataclass
class PostLiveStreamsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    live_stream: Optional[shared.LiveStream] = field(default=None)
    
