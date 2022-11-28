from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetRandomRecipeResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_recipe: Optional[shared.BigOvenModelAPIRecipe] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
