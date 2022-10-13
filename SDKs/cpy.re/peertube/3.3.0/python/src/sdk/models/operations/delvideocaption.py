from dataclasses import dataclass, field
from typing import Any


@dataclass
class DelVideoCaptionPathParams:
    caption_language: str = field(default=None, metadata={'path_param': { 'field_name': 'captionLanguage', 'style': 'simple', 'explode': False }})
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoCaptionSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoCaptionRequest:
    path_params: DelVideoCaptionPathParams = field(default=None)
    security: DelVideoCaptionSecurity = field(default=None)
    

@dataclass
class DelVideoCaptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
