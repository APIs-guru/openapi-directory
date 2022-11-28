from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetActiveRecipeQueryParams:
    user_name: str = field(metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetActiveRecipeRequest:
    query_params: RecipeGetActiveRecipeQueryParams = field()
    

@dataclass
class RecipeGetActiveRecipeResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_result: Optional[shared.BigOvenResult] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
