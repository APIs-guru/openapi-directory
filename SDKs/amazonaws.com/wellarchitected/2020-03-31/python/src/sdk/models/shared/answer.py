from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import choiceanswer
from . import choice
from . import answerreason_enum
from . import risk_enum


@dataclass_json
@dataclass
class Answer:
    choice_answers: Optional[List[choiceanswer.ChoiceAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChoiceAnswers' }})
    choices: Optional[List[choice.Choice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Choices' }})
    helpful_resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HelpfulResourceUrl' }})
    improvement_plan_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImprovementPlanUrl' }})
    is_applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsApplicable' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarId' }})
    question_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionDescription' }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionId' }})
    question_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionTitle' }})
    reason: Optional[answerreason_enum.AnswerReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    risk: Optional[risk_enum.RiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    selected_choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectedChoices' }})
    
