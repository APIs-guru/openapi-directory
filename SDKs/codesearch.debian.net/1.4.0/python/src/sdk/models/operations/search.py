from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class SearchMatchModeEnum(str, Enum):
    LITERAL = "literal"
    REGEXP = "regexp"


@dataclass
class SearchQueryParams:
    match_mode: Optional[SearchMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'match_mode', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SearchRequest:
    query_params: SearchQueryParams = field(default=None)
    security: SearchSecurity = field(default=None)
    

@dataclass
class SearchResponse:
    content_type: str = field(default=None)
    search_results: Optional[List[shared.SearchResult]] = field(default=None)
    status_code: int = field(default=None)
    
