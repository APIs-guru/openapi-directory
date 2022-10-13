from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchVideoPathParams:
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVideoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchVideoRequest:
    path_params: PatchVideoPathParams = field(default=None)
    request: Optional[shared.VideoUpdatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchVideoSecurity = field(default=None)
    

@dataclass
class PatchVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
