from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFactCategoriesQueryParams:
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactCategoriesSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactCategoriesRequest:
    query_params: GetFactCategoriesQueryParams = field()
    security: GetFactCategoriesSecurity = field()
    

@dataclass
class GetFactCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    
