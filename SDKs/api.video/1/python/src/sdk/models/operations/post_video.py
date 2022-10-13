from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideoRequest:
    request: Optional[shared.VideoCreatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostVideoSecurity = field(default=None)
    

@dataclass
class PostVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
