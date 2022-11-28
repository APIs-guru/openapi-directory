from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3SearchImagesEditorialQueryParams:
    age_of_people: Optional[List[shared.AgeOfPeopleFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'age_of_people', 'style': 'form', 'explode': False }})
    artists: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    collection_codes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'collection_codes', 'style': 'form', 'explode': False }})
    collections_filter_type: Optional[shared.CollectionsFilterTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'collections_filter_type', 'style': 'form', 'explode': True }})
    compositions: Optional[List[shared.CompositionsFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'compositions', 'style': 'form', 'explode': False }})
    date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    download_product: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'download_product', 'style': 'form', 'explode': True }})
    editorial_segments: Optional[List[shared.EditorialSegmentContractEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'editorial_segments', 'style': 'form', 'explode': False }})
    embed_content_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'embed_content_only', 'style': 'form', 'explode': True }})
    entity_uris: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'entity_uris', 'style': 'form', 'explode': False }})
    ethnicity: Optional[List[shared.EthnicityFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ethnicity', 'style': 'form', 'explode': False }})
    event_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'event_ids', 'style': 'form', 'explode': False }})
    facet_fields: Optional[List[shared.EditorialImageSearchFacetsFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.EditorialImagesFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    file_types: Optional[List[shared.SearchFileTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'file_types', 'style': 'form', 'explode': False }})
    graphical_styles: Optional[List[shared.EditorialGraphicalStyleEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'graphical_styles', 'style': 'form', 'explode': False }})
    graphical_styles_filter_type: Optional[shared.GraphicalStylesFilterTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'graphical_styles_filter_type', 'style': 'form', 'explode': True }})
    include_facets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    include_related_searches: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_related_searches', 'style': 'form', 'explode': True }})
    keyword_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'keyword_ids', 'style': 'form', 'explode': False }})
    minimum_quality_rank: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minimum_quality_rank', 'style': 'form', 'explode': True }})
    minimum_size: Optional[shared.TeeShirtSizeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'minimum_size', 'style': 'form', 'explode': True }})
    number_of_people: Optional[List[shared.NumberOfPeopleFilterTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'number_of_people', 'style': 'form', 'explode': False }})
    orientations: Optional[List[shared.OrientationRequestEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'orientations', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    specific_people: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'specific_people', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3SearchImagesEditorialHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3SearchImagesEditorialRequest:
    headers: GetV3SearchImagesEditorialHeaders = field()
    query_params: GetV3SearchImagesEditorialQueryParams = field()
    

@dataclass
class GetV3SearchImagesEditorialResponse:
    content_type: str = field()
    status_code: int = field()
    editorial_image_search_results: Optional[shared.EditorialImageSearchResults] = field(default=None)
    
