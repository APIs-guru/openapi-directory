from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchVideosVideoIDCaptionsLanguagePathParams:
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVideosVideoIDCaptionsLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchVideosVideoIDCaptionsLanguageRequest:
    path_params: PatchVideosVideoIDCaptionsLanguagePathParams = field(default=None)
    request: Optional[shared.CaptionsUpdatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchVideosVideoIDCaptionsLanguageSecurity = field(default=None)
    

@dataclass
class PatchVideosVideoIDCaptionsLanguageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    subtitle: Optional[shared.Subtitle] = field(default=None)
    
