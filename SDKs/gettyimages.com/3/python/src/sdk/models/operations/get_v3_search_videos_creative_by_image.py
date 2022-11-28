from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3SearchVideosCreativeByImageQueryParams:
    asset_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_id', 'style': 'form', 'explode': True }})
    facet_fields: Optional[List[shared.CreateVideoSearchFacetsFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.CreativeVideosFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    image_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'image_url', 'style': 'form', 'explode': True }})
    include_facets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    product_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'product_types', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3SearchVideosCreativeByImageHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3SearchVideosCreativeByImageRequest:
    headers: GetV3SearchVideosCreativeByImageHeaders = field()
    query_params: GetV3SearchVideosCreativeByImageQueryParams = field()
    

@dataclass
class GetV3SearchVideosCreativeByImageResponse:
    content_type: str = field()
    status_code: int = field()
    creative_video_search_results: Optional[shared.CreativeVideoSearchResults] = field(default=None)
    
