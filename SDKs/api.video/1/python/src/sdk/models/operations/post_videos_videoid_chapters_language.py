from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostVideosVideoIDChaptersLanguagePathParams:
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosVideoIDChaptersLanguageSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostVideosVideoIDChaptersLanguageRequest:
    path_params: PostVideosVideoIDChaptersLanguagePathParams = field()
    security: PostVideosVideoIDChaptersLanguageSecurity = field()
    request: Optional[shared.ChaptersUpdatePayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostVideosVideoIDChaptersLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    chapter: Optional[shared.Chapter] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
