from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentGetContentByTagAndTypePathParams:
    locale: str = field(metadata={'path_param': { 'field_name': 'locale', 'style': 'simple', 'explode': False }})
    tag: str = field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentGetContentByTagAndTypeQueryParams:
    head: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentGetContentByTagAndTypeRequest:
    path_params: ContentGetContentByTagAndTypePathParams = field()
    query_params: ContentGetContentByTagAndTypeQueryParams = field()
    

@dataclass
class ContentGetContentByTagAndTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
