from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3SearchVideosEditorialQueryParams:
    age_of_people: Optional[List[shared.AgeOfPeopleFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'age_of_people', 'style': 'form', 'explode': False }})
    artists: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    aspect_ratios: Optional[List[shared.VideoAspectRatioFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'aspect_ratios', 'style': 'form', 'explode': False }})
    collection_codes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'collection_codes', 'style': 'form', 'explode': False }})
    collections_filter_type: Optional[shared.CollectionsFilterTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'collections_filter_type', 'style': 'form', 'explode': True }})
    compositions: Optional[List[shared.CompositionsFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'compositions', 'style': 'form', 'explode': False }})
    download_product: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'download_product', 'style': 'form', 'explode': True }})
    editorial_video_types: Optional[List[shared.EditorialVideoTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'editorial_video_types', 'style': 'form', 'explode': False }})
    entity_uris: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'entity_uris', 'style': 'form', 'explode': False }})
    facet_fields: Optional[List[shared.EditorialVideoSearchFacetsFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.EditorialVideosFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    format_available: Optional[shared.VideoFormatsRequestEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format_available', 'style': 'form', 'explode': True }})
    frame_rates: Optional[List[shared.VideoFrameRatesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'frame_rates', 'style': 'form', 'explode': False }})
    image_techniques: Optional[List[shared.ImageTechniquesFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'image_techniques', 'style': 'form', 'explode': False }})
    include_facets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    include_related_searches: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_related_searches', 'style': 'form', 'explode': True }})
    keyword_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'keyword_ids', 'style': 'form', 'explode': False }})
    max_clip_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_clip_length', 'style': 'form', 'explode': True }})
    min_clip_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min_clip_length', 'style': 'form', 'explode': True }})
    orientations: Optional[List[shared.VideoOrientationRequestEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'orientations', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    release_status: Optional[shared.ReleaseStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'release_status', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    specific_people: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'specific_people', 'style': 'form', 'explode': False }})
    viewpoints: Optional[List[shared.ViewpointsFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'viewpoints', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3SearchVideosEditorialHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3SearchVideosEditorialRequest:
    headers: GetV3SearchVideosEditorialHeaders = field()
    query_params: GetV3SearchVideosEditorialQueryParams = field()
    

@dataclass
class GetV3SearchVideosEditorialResponse:
    content_type: str = field()
    status_code: int = field()
    editorial_video_search_results: Optional[shared.EditorialVideoSearchResults] = field(default=None)
    
