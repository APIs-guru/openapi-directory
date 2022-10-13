from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentGetContentByTagAndTypePathParams:
    locale: str = field(default=None, metadata={'path_param': { 'field_name': 'locale', 'style': 'simple', 'explode': False }})
    tag: str = field(default=None, metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentGetContentByTagAndTypeQueryParams:
    head: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentGetContentByTagAndTypeRequest:
    path_params: ContentGetContentByTagAndTypePathParams = field(default=None)
    query_params: ContentGetContentByTagAndTypeQueryParams = field(default=None)
    

@dataclass
class ContentGetContentByTagAndTypeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
