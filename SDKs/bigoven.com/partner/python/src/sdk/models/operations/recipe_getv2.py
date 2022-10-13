from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetV2PathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeGetV2QueryParams:
    prefetch: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prefetch', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetV2Request:
    path_params: RecipeGetV2PathParams = field(default=None)
    query_params: RecipeGetV2QueryParams = field(default=None)
    

@dataclass
class RecipeGetV2Response:
    api2_models_recipes_recipe_response: Optional[shared.Api2ModelsRecipesRecipeResponse] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
