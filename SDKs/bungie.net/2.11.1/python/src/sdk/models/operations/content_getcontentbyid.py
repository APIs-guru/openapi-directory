from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentGetContentByIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    locale: str = field(default=None, metadata={'path_param': { 'field_name': 'locale', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentGetContentByIDQueryParams:
    head: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentGetContentByIDRequest:
    path_params: ContentGetContentByIDPathParams = field(default=None)
    query_params: ContentGetContentByIDQueryParams = field(default=None)
    

@dataclass
class ContentGetContentByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
