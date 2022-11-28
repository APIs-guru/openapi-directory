from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RecipeCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_recipe_categories: Optional[List[shared.BigOvenModelRecipeCategory]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
