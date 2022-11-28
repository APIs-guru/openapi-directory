from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFoodBrandedNamePhpQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoodBrandedNamePhpSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFoodBrandedNamePhpRequest:
    query_params: GetFoodBrandedNamePhpQueryParams = field()
    security: GetFoodBrandedNamePhpSecurity = field()
    

@dataclass
class GetFoodBrandedNamePhpResponse:
    content_type: str = field()
    status_code: int = field()
    branded_food_object: Optional[shared.BrandedFoodObject] = field(default=None)
    
