from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BigOvenModelRecipeInfoTiny:
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageURL') }})
    quality_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualityScore') }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecipeID') }})
    servings: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Servings') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    
