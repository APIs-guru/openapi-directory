from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetRecipeWithStepsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeGetRecipeWithStepsQueryParams:
    prefetch: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prefetch', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetRecipeWithStepsRequest:
    path_params: RecipeGetRecipeWithStepsPathParams = field()
    query_params: RecipeGetRecipeWithStepsQueryParams = field()
    

@dataclass
class RecipeGetRecipeWithStepsResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api2_recipe: Optional[shared.BigOvenModelApi2Recipe] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
