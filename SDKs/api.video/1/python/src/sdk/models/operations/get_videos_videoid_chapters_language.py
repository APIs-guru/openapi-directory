from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideosVideoIDChaptersLanguagePathParams:
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosVideoIDChaptersLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideosVideoIDChaptersLanguageRequest:
    path_params: GetVideosVideoIDChaptersLanguagePathParams = field(default=None)
    security: GetVideosVideoIDChaptersLanguageSecurity = field(default=None)
    

@dataclass
class GetVideosVideoIDChaptersLanguageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    chapter: Optional[shared.Chapter] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
