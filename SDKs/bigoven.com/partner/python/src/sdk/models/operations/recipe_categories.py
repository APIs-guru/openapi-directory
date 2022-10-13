from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RecipeCategoriesResponse:
    big_oven_model_recipe_categories: Optional[List[shared.BigOvenModelRecipeCategory]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
