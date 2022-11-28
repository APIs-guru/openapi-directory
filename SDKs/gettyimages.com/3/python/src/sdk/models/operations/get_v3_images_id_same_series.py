from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3ImagesIDSameSeriesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDSameSeriesQueryParams:
    fields: Optional[List[shared.ImagesFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3ImagesIDSameSeriesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDSameSeriesRequest:
    headers: GetV3ImagesIDSameSeriesHeaders = field()
    path_params: GetV3ImagesIDSameSeriesPathParams = field()
    query_params: GetV3ImagesIDSameSeriesQueryParams = field()
    

@dataclass
class GetV3ImagesIDSameSeriesResponse:
    content_type: str = field()
    status_code: int = field()
    image_search_item_search_results: Optional[shared.ImageSearchItemSearchResults] = field(default=None)
    
