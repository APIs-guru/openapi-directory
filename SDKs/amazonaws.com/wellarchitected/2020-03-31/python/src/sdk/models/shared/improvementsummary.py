from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImprovementSummary:
    r"""ImprovementSummary
    An improvement summary of a lens review in a workload.
    """
    
    improvement_plan_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImprovementPlanUrl') }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarId') }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionId') }})
    question_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionTitle') }})
    risk: Optional[RiskEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
