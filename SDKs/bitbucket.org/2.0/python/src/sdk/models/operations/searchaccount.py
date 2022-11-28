from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SearchAccountPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchAccountQueryParams:
    search_query: str = field(metadata={'query_param': { 'field_name': 'search_query', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagelen: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagelen', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchAccountRequest:
    path_params: SearchAccountPathParams = field()
    query_params: SearchAccountQueryParams = field()
    

@dataclass
class SearchAccountResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    search_result_page: Optional[shared.SearchResultPage] = field(default=None)
    
