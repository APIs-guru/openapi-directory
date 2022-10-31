from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3ImagesIDSimilarPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDSimilarQueryParams:
    fields: Optional[List[shared.ImagesFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3ImagesIDSimilarHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDSimilarRequest:
    path_params: GetV3ImagesIDSimilarPathParams = field(default=None)
    query_params: GetV3ImagesIDSimilarQueryParams = field(default=None)
    headers: GetV3ImagesIDSimilarHeaders = field(default=None)
    

@dataclass
class GetV3ImagesIDSimilarResponse:
    content_type: str = field(default=None)
    image_search_item_search_results: Optional[shared.ImageSearchItemSearchResults] = field(default=None)
    status_code: int = field(default=None)
    
