from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetRandomRecipeResponse:
    big_oven_model_api_recipe: Optional[shared.BigOvenModelAPIRecipe] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
