from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OptimizationObjective:
    r"""OptimizationObjective
    Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href=\"https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html\">Optimizing a solution</a>.
    """
    
    item_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemAttribute') }})
    objective_sensitivity: Optional[ObjectiveSensitivityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectiveSensitivity') }})
    
