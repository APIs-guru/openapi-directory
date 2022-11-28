from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetStepNumberQueryParams:
    recipe_id: int = field(metadata={'query_param': { 'field_name': 'recipeId', 'style': 'form', 'explode': True }})
    user_name: str = field(metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetStepNumberRequest:
    query_params: RecipeGetStepNumberQueryParams = field()
    

@dataclass
class RecipeGetStepNumberResponse:
    content_type: str = field()
    status_code: int = field()
    api2_result: Optional[shared.Api2Result] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
