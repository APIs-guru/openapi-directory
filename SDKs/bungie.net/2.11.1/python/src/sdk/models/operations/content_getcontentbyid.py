from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentGetContentByIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    locale: str = field(metadata={'path_param': { 'field_name': 'locale', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentGetContentByIDQueryParams:
    head: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentGetContentByIDRequest:
    path_params: ContentGetContentByIDPathParams = field()
    query_params: ContentGetContentByIDQueryParams = field()
    

@dataclass
class ContentGetContentByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
