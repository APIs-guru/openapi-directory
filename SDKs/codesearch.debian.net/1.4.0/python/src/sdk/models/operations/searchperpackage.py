from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class SearchperpackageMatchModeEnum(str, Enum):
    LITERAL = "literal"
    REGEXP = "regexp"


@dataclass
class SearchperpackageQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    match_mode: Optional[SearchperpackageMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'match_mode', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchperpackageSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SearchperpackageRequest:
    query_params: SearchperpackageQueryParams = field()
    security: SearchperpackageSecurity = field()
    

@dataclass
class SearchperpackageResponse:
    content_type: str = field()
    status_code: int = field()
    package_search_results: Optional[List[shared.PackageSearchResult]] = field(default=None)
    
