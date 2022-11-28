from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RecipeAutoCompleteMyRecipesQueryParams:
    limit: int = field(metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeAutoCompleteMyRecipesRequest:
    query_params: RecipeAutoCompleteMyRecipesQueryParams = field()
    

@dataclass
class RecipeAutoCompleteMyRecipesResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_recipe_info_tinies: Optional[List[shared.BigOvenModelRecipeInfoTiny]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
