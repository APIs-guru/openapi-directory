from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideosVideoIDCaptionsLanguagePathParams:
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDCaptionsLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideosVideoIDCaptionsLanguageRequest:
    path_params: PostVideosVideoIDCaptionsLanguagePathParams = field()
    security: PostVideosVideoIDCaptionsLanguageSecurity = field()
    request: Optional[shared.CaptionsUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostVideosVideoIDCaptionsLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    subtitle: Optional[shared.Subtitle] = field(default=None)
    
