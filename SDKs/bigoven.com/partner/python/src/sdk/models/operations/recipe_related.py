from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeRelatedPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeRelatedQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeRelatedRequest:
    path_params: RecipeRelatedPathParams = field(default=None)
    query_params: RecipeRelatedQueryParams = field(default=None)
    

@dataclass
class RecipeRelatedResponse:
    big_oven_model_api2_recipe_search_result: Optional[shared.BigOvenModelApi2RecipeSearchResult] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
