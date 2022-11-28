from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest:
    mark_as_pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markAsPending') }, 'form': { 'field_name': 'markAsPending' }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipeId') }, 'form': { 'field_name': 'recipeId' }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }, 'form': { 'field_name': 'scale' }})
    
