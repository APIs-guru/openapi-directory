from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFoodBrandedNamePhpQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoodBrandedNamePhpSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFoodBrandedNamePhpRequest:
    query_params: GetFoodBrandedNamePhpQueryParams = field(default=None)
    security: GetFoodBrandedNamePhpSecurity = field(default=None)
    

@dataclass
class GetFoodBrandedNamePhpResponse:
    branded_food_object: Optional[shared.BrandedFoodObject] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
