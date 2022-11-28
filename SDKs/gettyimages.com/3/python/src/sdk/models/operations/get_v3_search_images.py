from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3SearchImagesQueryParams:
    age_of_people: Optional[List[shared.AgeOfPeopleFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'age_of_people', 'style': 'form', 'explode': False }})
    artists: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    collection_codes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'collection_codes', 'style': 'form', 'explode': False }})
    collections_filter_type: Optional[shared.CollectionsFilterTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'collections_filter_type', 'style': 'form', 'explode': True }})
    color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    compositions: Optional[List[shared.CompositionsFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'compositions', 'style': 'form', 'explode': False }})
    download_product: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'download_product', 'style': 'form', 'explode': True }})
    embed_content_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'embed_content_only', 'style': 'form', 'explode': True }})
    ethnicity: Optional[List[shared.EthnicityFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ethnicity', 'style': 'form', 'explode': False }})
    event_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'event_ids', 'style': 'form', 'explode': False }})
    exclude_nudity: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_nudity', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ImagesFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    file_types: Optional[List[shared.SearchFileTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'file_types', 'style': 'form', 'explode': False }})
    graphical_styles: Optional[List[shared.GraphicalStyleEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'graphical_styles', 'style': 'form', 'explode': False }})
    graphical_styles_filter_type: Optional[shared.GraphicalStylesFilterTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'graphical_styles_filter_type', 'style': 'form', 'explode': True }})
    include_related_searches: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_related_searches', 'style': 'form', 'explode': True }})
    keyword_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'keyword_ids', 'style': 'form', 'explode': False }})
    minimum_size: Optional[shared.TeeShirtSizeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'minimum_size', 'style': 'form', 'explode': True }})
    number_of_people: Optional[List[shared.NumberOfPeopleFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'number_of_people', 'style': 'form', 'explode': False }})
    orientations: Optional[List[shared.OrientationRequestEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'orientations', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.BlendedImageSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    specific_people: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'specific_people', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3SearchImagesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3SearchImagesRequest:
    headers: GetV3SearchImagesHeaders = field()
    query_params: GetV3SearchImagesQueryParams = field()
    

@dataclass
class GetV3SearchImagesResponse:
    content_type: str = field()
    status_code: int = field()
    image_search_item_search_results: Optional[shared.ImageSearchItemSearchResults] = field(default=None)
    
