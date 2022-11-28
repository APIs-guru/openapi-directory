from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class SearchMatchModeEnum(str, Enum):
    LITERAL = "literal"
    REGEXP = "regexp"


@dataclass
class SearchQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    match_mode: Optional[SearchMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'match_mode', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SearchRequest:
    query_params: SearchQueryParams = field()
    security: SearchSecurity = field()
    

@dataclass
class SearchResponse:
    content_type: str = field()
    status_code: int = field()
    search_results: Optional[List[shared.SearchResult]] = field(default=None)
    
