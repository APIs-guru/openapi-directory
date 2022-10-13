from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import solutionconfig


@dataclass_json
@dataclass
class CreateSolutionRequest:
    dataset_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetGroupArn' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performAutoML' }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performHPO' }})
    recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeArn' }})
    solution_config: Optional[solutionconfig.SolutionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionConfig' }})
    
