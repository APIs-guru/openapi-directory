from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest:
    mark_as_pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markAsPending' }, 'form': { 'field_name': 'markAsPending' }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeId' }, 'form': { 'field_name': 'recipeId' }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }, 'form': { 'field_name': 'scale' }})
    
