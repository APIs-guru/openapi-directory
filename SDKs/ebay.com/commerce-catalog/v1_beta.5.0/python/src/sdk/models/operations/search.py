from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchQueryParams:
    aspect_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'aspect_filter', 'style': 'form', 'explode': True }})
    category_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category_ids', 'style': 'form', 'explode': True }})
    fieldgroups: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fieldgroups', 'style': 'form', 'explode': True }})
    gtin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'gtin', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mpn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mpn', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchRequest:
    query_params: SearchQueryParams = field(default=None)
    security: SearchSecurity = field(default=None)
    

@dataclass
class SearchResponse:
    content_type: str = field(default=None)
    product_search_response: Optional[shared.ProductSearchResponse] = field(default=None)
    status_code: int = field(default=None)
    
