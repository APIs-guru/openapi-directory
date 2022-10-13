from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetActiveRecipeQueryParams:
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetActiveRecipeRequest:
    query_params: RecipeGetActiveRecipeQueryParams = field(default=None)
    

@dataclass
class RecipeGetActiveRecipeResponse:
    big_oven_result: Optional[shared.BigOvenResult] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
