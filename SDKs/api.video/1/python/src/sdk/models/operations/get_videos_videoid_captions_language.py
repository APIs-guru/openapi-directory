from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideosVideoIDCaptionsLanguagePathParams:
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosVideoIDCaptionsLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideosVideoIDCaptionsLanguageRequest:
    path_params: GetVideosVideoIDCaptionsLanguagePathParams = field()
    security: GetVideosVideoIDCaptionsLanguageSecurity = field()
    

@dataclass
class GetVideosVideoIDCaptionsLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    subtitle: Optional[shared.Subtitle] = field(default=None)
    
