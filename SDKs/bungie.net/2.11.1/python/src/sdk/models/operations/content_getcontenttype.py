from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentGetContentTypePathParams:
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentGetContentTypeRequest:
    path_params: ContentGetContentTypePathParams = field()
    

@dataclass
class ContentGetContentTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
