from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMlModelInput:
    ml_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    ml_model_type: MlModelTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelType') }})
    training_data_source_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingDataSourceId') }})
    ml_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelName') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    recipe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recipe') }})
    recipe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecipeUri') }})
    
