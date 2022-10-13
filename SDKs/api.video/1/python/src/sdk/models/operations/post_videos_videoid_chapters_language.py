from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideosVideoIDChaptersLanguagePathParams:
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDChaptersLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideosVideoIDChaptersLanguageRequest:
    path_params: PostVideosVideoIDChaptersLanguagePathParams = field(default=None)
    request: Optional[shared.ChaptersUpdatePayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostVideosVideoIDChaptersLanguageSecurity = field(default=None)
    

@dataclass
class PostVideosVideoIDChaptersLanguageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    chapter: Optional[shared.Chapter] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
