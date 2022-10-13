from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideosVideoIDCaptionsLanguagePathParams:
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDCaptionsLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideosVideoIDCaptionsLanguageRequest:
    path_params: PostVideosVideoIDCaptionsLanguagePathParams = field(default=None)
    request: Optional[shared.CaptionsUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostVideosVideoIDCaptionsLanguageSecurity = field(default=None)
    

@dataclass
class PostVideosVideoIDCaptionsLanguageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    subtitle: Optional[shared.Subtitle] = field(default=None)
    
