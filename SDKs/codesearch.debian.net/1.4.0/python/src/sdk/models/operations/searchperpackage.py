from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class SearchperpackageMatchModeEnum(str, Enum):
    LITERAL = "literal"
    REGEXP = "regexp"


@dataclass
class SearchperpackageQueryParams:
    match_mode: Optional[SearchperpackageMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'match_mode', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchperpackageSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SearchperpackageRequest:
    query_params: SearchperpackageQueryParams = field(default=None)
    security: SearchperpackageSecurity = field(default=None)
    

@dataclass
class SearchperpackageResponse:
    content_type: str = field(default=None)
    package_search_results: Optional[List[shared.PackageSearchResult]] = field(default=None)
    status_code: int = field(default=None)
    
