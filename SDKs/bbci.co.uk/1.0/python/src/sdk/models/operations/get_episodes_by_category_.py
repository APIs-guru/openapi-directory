from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetEpisodesByCategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    
class GetEpisodesByCategorySortEnum(str, Enum):
    RECENT = "recent"
    POPULAR = "popular"


@dataclass
class GetEpisodesByCategoryQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    page: int = field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: int = field(metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    sort: Optional[GetEpisodesByCategorySortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEpisodesByCategoryRequest:
    path_params: GetEpisodesByCategoryPathParams = field()
    query_params: GetEpisodesByCategoryQueryParams = field()
    

@dataclass
class GetEpisodesByCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
