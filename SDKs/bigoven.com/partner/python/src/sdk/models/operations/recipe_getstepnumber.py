from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetStepNumberQueryParams:
    recipe_id: int = field(default=None, metadata={'query_param': { 'field_name': 'recipeId', 'style': 'form', 'explode': True }})
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetStepNumberRequest:
    query_params: RecipeGetStepNumberQueryParams = field(default=None)
    

@dataclass
class RecipeGetStepNumberResponse:
    api2_result: Optional[shared.Api2Result] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
