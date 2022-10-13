from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recipesummary


@dataclass_json
@dataclass
class ListRecipesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    recipes: Optional[List[recipesummary.RecipeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipes' }})
    
