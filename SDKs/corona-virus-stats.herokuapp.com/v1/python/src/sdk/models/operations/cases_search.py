from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CasesSearchQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class CasesSearchRequest:
    query_params: CasesSearchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CasesSearch200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.CountryStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class CasesSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    cases_search_200_application_json_object: Optional[CasesSearch200ApplicationJSON] = field(default=None)
    
