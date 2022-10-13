from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SearchAccountPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchAccountQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagelen: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagelen', 'style': 'form', 'explode': True }})
    search_query: str = field(default=None, metadata={'query_param': { 'field_name': 'search_query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchAccountRequest:
    path_params: SearchAccountPathParams = field(default=None)
    query_params: SearchAccountQueryParams = field(default=None)
    

@dataclass
class SearchAccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    search_result_page: Optional[shared.SearchResultPage] = field(default=None)
    
