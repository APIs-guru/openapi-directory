from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3SearchImagesCreativeByImageQueryParams:
    asset_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_id', 'style': 'form', 'explode': True }})
    facet_fields: Optional[List[shared.CreateImageSearchFacetsFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.CreativeImagesFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    image_fingerprint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'image_fingerprint', 'style': 'form', 'explode': True }})
    image_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'image_url', 'style': 'form', 'explode': True }})
    include_facets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    product_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'product_types', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3SearchImagesCreativeByImageHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    gi_country_code: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code' }})
    

@dataclass
class GetV3SearchImagesCreativeByImageRequest:
    query_params: GetV3SearchImagesCreativeByImageQueryParams = field(default=None)
    headers: GetV3SearchImagesCreativeByImageHeaders = field(default=None)
    

@dataclass
class GetV3SearchImagesCreativeByImageResponse:
    content_type: str = field(default=None)
    search_by_image_resource_results: Optional[shared.SearchByImageResourceResults] = field(default=None)
    status_code: int = field(default=None)
    
