from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api2_recipeinfox


@dataclass_json
@dataclass
class BigOvenModelApi2RecipeSearchResult:
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultCount' }})
    results: Optional[List[bigoven_model_api2_recipeinfox.BigOvenModelApi2RecipeInfox]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    spell_suggest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpellSuggest' }})
    
