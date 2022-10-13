from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api2_recipeinfox
from . import bigoven_model_api_review


@dataclass_json
@dataclass
class BigOvenModelRecipeInfoReviewTuple2:
    recipe_info: Optional[bigoven_model_api2_recipeinfox.BigOvenModelApi2RecipeInfox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecipeInfo' }})
    review: Optional[bigoven_model_api_review.BigOvenModelAPIReview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Review' }})
    
