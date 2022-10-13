from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetSearchQueryParams:
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetSearchRequest:
    query_params: GetSearchQueryParams = field(default=None)
    security: GetSearchSecurity = field(default=None)
    

@dataclass
class GetSearchResponse:
    content_type: str = field(default=None)
    get_search_200_application_json_any: Optional[Any] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
