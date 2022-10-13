from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3ImagesIDSameSeriesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDSameSeriesQueryParams:
    fields: Optional[List[shared.ImagesFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3ImagesIDSameSeriesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3ImagesIDSameSeriesRequest:
    path_params: GetV3ImagesIDSameSeriesPathParams = field(default=None)
    query_params: GetV3ImagesIDSameSeriesQueryParams = field(default=None)
    headers: GetV3ImagesIDSameSeriesHeaders = field(default=None)
    

@dataclass
class GetV3ImagesIDSameSeriesResponse:
    content_type: str = field(default=None)
    image_search_item_search_results: Optional[shared.ImageSearchItemSearchResults] = field(default=None)
    status_code: int = field(default=None)
    
