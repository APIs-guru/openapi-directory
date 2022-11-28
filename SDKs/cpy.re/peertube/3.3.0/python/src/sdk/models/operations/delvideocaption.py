from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class DelVideoCaptionPathParams:
    caption_language: str = field(metadata={'path_param': { 'field_name': 'captionLanguage', 'style': 'simple', 'explode': False }})
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoCaptionSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoCaptionRequest:
    path_params: DelVideoCaptionPathParams = field()
    security: DelVideoCaptionSecurity = field()
    

@dataclass
class DelVideoCaptionResponse:
    content_type: str = field()
    status_code: int = field()
    
