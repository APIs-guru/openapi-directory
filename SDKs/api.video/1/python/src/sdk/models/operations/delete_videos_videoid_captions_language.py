from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVideosVideoIDCaptionsLanguagePathParams:
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideosVideoIDCaptionsLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteVideosVideoIDCaptionsLanguageRequest:
    path_params: DeleteVideosVideoIDCaptionsLanguagePathParams = field()
    security: DeleteVideosVideoIDCaptionsLanguageSecurity = field()
    

@dataclass
class DeleteVideosVideoIDCaptionsLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    
