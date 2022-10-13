from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HumanLoopActivationOutput:
    human_loop_activation_conditions_evaluation_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopActivationConditionsEvaluationResults' }})
    human_loop_activation_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopActivationReasons' }})
    human_loop_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopArn' }})
    
