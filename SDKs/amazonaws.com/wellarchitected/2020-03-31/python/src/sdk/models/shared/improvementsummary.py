from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import risk_enum


@dataclass_json
@dataclass
class ImprovementSummary:
    improvement_plan_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImprovementPlanUrl' }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarId' }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionId' }})
    question_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionTitle' }})
    risk: Optional[risk_enum.RiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
