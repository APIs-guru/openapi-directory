from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFoodIngredientSearchPhpQueryParams:
    find: str = field(default=None, metadata={'query_param': { 'field_name': 'find', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoodIngredientSearchPhpSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFoodIngredientSearchPhpRequest:
    query_params: GetFoodIngredientSearchPhpQueryParams = field(default=None)
    security: GetFoodIngredientSearchPhpSecurity = field(default=None)
    

@dataclass
class GetFoodIngredientSearchPhpResponse:
    content_type: str = field(default=None)
    ingredient_object: Optional[shared.IngredientObject] = field(default=None)
    status_code: int = field(default=None)
    
