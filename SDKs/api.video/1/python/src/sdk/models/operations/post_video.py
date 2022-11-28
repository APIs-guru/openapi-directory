from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideoRequest:
    security: PostVideoSecurity = field()
    request: Optional[shared.VideoCreatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVideoResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
