from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetStepsQueryParams:
    recipe_id: int = field(metadata={'query_param': { 'field_name': 'recipeId', 'style': 'form', 'explode': True }})
    step_id: int = field(metadata={'query_param': { 'field_name': 'stepId', 'style': 'form', 'explode': True }})
    user_name: str = field(metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetStepsRequest:
    query_params: RecipeGetStepsQueryParams = field()
    

@dataclass
class RecipeGetStepsResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_result: Optional[shared.BigOvenResult] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
