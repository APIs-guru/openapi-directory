from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Answer:
    r"""Answer
    An answer of the question.
    """
    
    choice_answers: Optional[List[ChoiceAnswer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChoiceAnswers') }})
    choices: Optional[List[Choice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Choices') }})
    helpful_resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HelpfulResourceUrl') }})
    improvement_plan_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImprovementPlanUrl') }})
    is_applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsApplicable') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarId') }})
    question_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionDescription') }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionId') }})
    question_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionTitle') }})
    reason: Optional[AnswerReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    risk: Optional[RiskEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    selected_choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectedChoices') }})
    
