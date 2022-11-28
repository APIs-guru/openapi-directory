from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchVideosVideoIDCaptionsLanguagePathParams:
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVideosVideoIDCaptionsLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchVideosVideoIDCaptionsLanguageRequest:
    path_params: PatchVideosVideoIDCaptionsLanguagePathParams = field()
    security: PatchVideosVideoIDCaptionsLanguageSecurity = field()
    request: Optional[shared.CaptionsUpdatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchVideosVideoIDCaptionsLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    subtitle: Optional[shared.Subtitle] = field(default=None)
    
