from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResolvedAttributes:
    r"""ResolvedAttributes
    The resolved attributes.
    """
    
    auto_ml_job_objective: Optional[AutoMlJobObjective] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobObjective') }})
    completion_criteria: Optional[AutoMlJobCompletionCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionCriteria') }})
    problem_type: Optional[ProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProblemType') }})
    
