from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainsUpdatesAddedQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsUpdatesAddedRequest:
    query_params: GetDomainsUpdatesAddedQueryParams = field(default=None)
    

@dataclass
class GetDomainsUpdatesAddedResponse:
    content_type: str = field(default=None)
    search_results: Optional[shared.SearchResults] = field(default=None)
    status_code: int = field(default=None)
    
