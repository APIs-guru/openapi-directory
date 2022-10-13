from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import automljobobjective
from . import automljobcompletioncriteria
from . import problemtype_enum


@dataclass_json
@dataclass
class ResolvedAttributes:
    auto_ml_job_objective: Optional[automljobobjective.AutoMlJobObjective] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobObjective' }})
    completion_criteria: Optional[automljobcompletioncriteria.AutoMlJobCompletionCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionCriteria' }})
    problem_type: Optional[problemtype_enum.ProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProblemType' }})
    
