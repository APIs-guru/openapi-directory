from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentSearchContentByTagAndTypePathParams:
    locale: str = field(metadata={'path_param': { 'field_name': 'locale', 'style': 'simple', 'explode': False }})
    tag: str = field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSearchContentByTagAndTypeQueryParams:
    currentpage: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    head: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    itemsperpage: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'itemsperpage', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentSearchContentByTagAndTypeRequest:
    path_params: ContentSearchContentByTagAndTypePathParams = field()
    query_params: ContentSearchContentByTagAndTypeQueryParams = field()
    

@dataclass
class ContentSearchContentByTagAndTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
