from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnswerSummary:
    r"""AnswerSummary
    An answer summary of a lens review in a workload.
    """
    
    choice_answer_summaries: Optional[List[ChoiceAnswerSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChoiceAnswerSummaries') }})
    choices: Optional[List[Choice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Choices') }})
    is_applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsApplicable') }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarId') }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionId') }})
    question_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionTitle') }})
    reason: Optional[AnswerReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    risk: Optional[RiskEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    selected_choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectedChoices') }})
    
