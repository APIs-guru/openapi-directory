from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigOvenModelRecipeInfoReviewTuple2:
    recipe_info: Optional[BigOvenModelApi2RecipeInfox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecipeInfo') }})
    review: Optional[BigOvenModelAPIReview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Review') }})
    
