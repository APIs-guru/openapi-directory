from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mlmodeltype_enum


@dataclass_json
@dataclass
class CreateMlModelInput:
    ml_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelId' }})
    ml_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelName' }})
    ml_model_type: mlmodeltype_enum.MlModelTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelType' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    recipe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recipe' }})
    recipe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecipeUri' }})
    training_data_source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingDataSourceId' }})
    
