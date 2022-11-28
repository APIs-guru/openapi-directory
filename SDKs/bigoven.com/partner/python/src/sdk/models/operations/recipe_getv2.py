from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetV2PathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeGetV2QueryParams:
    prefetch: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prefetch', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetV2Request:
    path_params: RecipeGetV2PathParams = field()
    query_params: RecipeGetV2QueryParams = field()
    

@dataclass
class RecipeGetV2Response:
    content_type: str = field()
    status_code: int = field()
    api2_models_recipes_recipe_response: Optional[shared.Api2ModelsRecipesRecipeResponse] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
