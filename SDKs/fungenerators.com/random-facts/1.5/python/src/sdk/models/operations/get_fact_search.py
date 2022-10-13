from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFactSearchQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    subcategory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subcategory', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactSearchSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactSearchRequest:
    query_params: GetFactSearchQueryParams = field(default=None)
    security: GetFactSearchSecurity = field(default=None)
    

@dataclass
class GetFactSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
