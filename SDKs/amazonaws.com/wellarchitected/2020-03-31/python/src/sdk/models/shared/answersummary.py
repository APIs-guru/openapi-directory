from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import choiceanswersummary
from . import choice
from . import answerreason_enum
from . import risk_enum


@dataclass_json
@dataclass
class AnswerSummary:
    choice_answer_summaries: Optional[List[choiceanswersummary.ChoiceAnswerSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChoiceAnswerSummaries' }})
    choices: Optional[List[choice.Choice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Choices' }})
    is_applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsApplicable' }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarId' }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionId' }})
    question_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionTitle' }})
    reason: Optional[answerreason_enum.AnswerReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    risk: Optional[risk_enum.RiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    selected_choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectedChoices' }})
    
