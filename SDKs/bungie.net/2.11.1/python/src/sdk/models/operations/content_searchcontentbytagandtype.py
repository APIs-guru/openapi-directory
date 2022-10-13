from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentSearchContentByTagAndTypePathParams:
    locale: str = field(default=None, metadata={'path_param': { 'field_name': 'locale', 'style': 'simple', 'explode': False }})
    tag: str = field(default=None, metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSearchContentByTagAndTypeQueryParams:
    currentpage: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    head: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    itemsperpage: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'itemsperpage', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentSearchContentByTagAndTypeRequest:
    path_params: ContentSearchContentByTagAndTypePathParams = field(default=None)
    query_params: ContentSearchContentByTagAndTypeQueryParams = field(default=None)
    

@dataclass
class ContentSearchContentByTagAndTypeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
