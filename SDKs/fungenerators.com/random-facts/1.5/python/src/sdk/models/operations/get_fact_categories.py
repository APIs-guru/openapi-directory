from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFactCategoriesQueryParams:
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactCategoriesSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactCategoriesRequest:
    query_params: GetFactCategoriesQueryParams = field(default=None)
    security: GetFactCategoriesSecurity = field(default=None)
    

@dataclass
class GetFactCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
