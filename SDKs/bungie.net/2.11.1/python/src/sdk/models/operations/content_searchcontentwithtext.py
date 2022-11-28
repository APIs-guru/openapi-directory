from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentSearchContentWithTextPathParams:
    locale: str = field(metadata={'path_param': { 'field_name': 'locale', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSearchContentWithTextQueryParams:
    ctype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ctype', 'style': 'form', 'explode': True }})
    currentpage: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    head: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    searchtext: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchtext', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentSearchContentWithTextRequest:
    path_params: ContentSearchContentWithTextPathParams = field()
    query_params: ContentSearchContentWithTextQueryParams = field()
    

@dataclass
class ContentSearchContentWithTextResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
