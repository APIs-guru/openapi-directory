from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideosVideoIDChaptersLanguagePathParams:
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosVideoIDChaptersLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideosVideoIDChaptersLanguageRequest:
    path_params: GetVideosVideoIDChaptersLanguagePathParams = field()
    security: GetVideosVideoIDChaptersLanguageSecurity = field()
    

@dataclass
class GetVideosVideoIDChaptersLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    chapter: Optional[shared.Chapter] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
