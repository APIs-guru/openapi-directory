from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideosVideoIDCaptionsLanguagePathParams:
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosVideoIDCaptionsLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideosVideoIDCaptionsLanguageRequest:
    path_params: GetVideosVideoIDCaptionsLanguagePathParams = field(default=None)
    security: GetVideosVideoIDCaptionsLanguageSecurity = field(default=None)
    

@dataclass
class GetVideosVideoIDCaptionsLanguageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    subtitle: Optional[shared.Subtitle] = field(default=None)
    
