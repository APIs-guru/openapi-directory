from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFoodIngredientSearchPhpQueryParams:
    find: str = field(metadata={'query_param': { 'field_name': 'find', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoodIngredientSearchPhpSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFoodIngredientSearchPhpRequest:
    query_params: GetFoodIngredientSearchPhpQueryParams = field()
    security: GetFoodIngredientSearchPhpSecurity = field()
    

@dataclass
class GetFoodIngredientSearchPhpResponse:
    content_type: str = field()
    status_code: int = field()
    ingredient_object: Optional[shared.IngredientObject] = field(default=None)
    
