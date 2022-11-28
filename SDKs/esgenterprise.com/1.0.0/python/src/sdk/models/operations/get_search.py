from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetSearchQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetSearchRequest:
    query_params: GetSearchQueryParams = field()
    security: GetSearchSecurity = field()
    

@dataclass
class GetSearchResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_search_200_application_json_any: Optional[Any] = field(default=None)
    
