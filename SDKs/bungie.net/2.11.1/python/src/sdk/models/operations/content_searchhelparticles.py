from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentSearchHelpArticlesPathParams:
    searchtext: str = field(metadata={'path_param': { 'field_name': 'searchtext', 'style': 'simple', 'explode': False }})
    size: str = field(metadata={'path_param': { 'field_name': 'size', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSearchHelpArticlesRequest:
    path_params: ContentSearchHelpArticlesPathParams = field()
    

@dataclass
class ContentSearchHelpArticlesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
