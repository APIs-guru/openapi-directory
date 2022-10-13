from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RecipeAutoCompleteMyRecipesQueryParams:
    limit: int = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeAutoCompleteMyRecipesRequest:
    query_params: RecipeAutoCompleteMyRecipesQueryParams = field(default=None)
    

@dataclass
class RecipeAutoCompleteMyRecipesResponse:
    big_oven_model_recipe_info_tinies: Optional[List[shared.BigOvenModelRecipeInfoTiny]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
