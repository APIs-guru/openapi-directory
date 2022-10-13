from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class SearchIncludeEnum(str, Enum):
    TV = "tv"
    MOVIES = "movies"
    PEOPLE = "people"
    OTHER = "other"


@dataclass
class SearchQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    group: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    include: Optional[List[SearchIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_rating', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_results', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    term: str = field(default=None, metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchRequest:
    query_params: SearchQueryParams = field(default=None)
    

@dataclass
class SearchResponse:
    content_type: str = field(default=None)
    search_results: Optional[shared.SearchResults] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
