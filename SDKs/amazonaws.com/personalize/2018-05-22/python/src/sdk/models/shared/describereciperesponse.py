from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recipe


@dataclass_json
@dataclass
class DescribeRecipeResponse:
    recipe: Optional[recipe.Recipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipe' }})
    
