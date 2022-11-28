from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSolutionRequest:
    dataset_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroupArn') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performAutoML') }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performHPO') }})
    recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipeArn') }})
    solution_config: Optional[SolutionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionConfig') }})
    
