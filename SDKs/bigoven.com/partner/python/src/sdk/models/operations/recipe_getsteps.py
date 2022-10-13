from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetStepsQueryParams:
    recipe_id: int = field(default=None, metadata={'query_param': { 'field_name': 'recipeId', 'style': 'form', 'explode': True }})
    step_id: int = field(default=None, metadata={'query_param': { 'field_name': 'stepId', 'style': 'form', 'explode': True }})
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetStepsRequest:
    query_params: RecipeGetStepsQueryParams = field(default=None)
    

@dataclass
class RecipeGetStepsResponse:
    big_oven_result: Optional[shared.BigOvenResult] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
