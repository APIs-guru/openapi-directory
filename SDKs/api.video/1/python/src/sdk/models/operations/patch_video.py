from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchVideoPathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVideoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchVideoRequest:
    path_params: PatchVideoPathParams = field()
    security: PatchVideoSecurity = field()
    request: Optional[shared.VideoUpdatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchVideoResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
