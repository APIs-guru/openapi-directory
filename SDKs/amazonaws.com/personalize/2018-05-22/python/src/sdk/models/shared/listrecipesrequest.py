from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import recipeprovider_enum


@dataclass_json
@dataclass
class ListRecipesRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    recipe_provider: Optional[recipeprovider_enum.RecipeProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeProvider' }})
    
