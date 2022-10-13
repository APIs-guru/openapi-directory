from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import decision


@dataclass_json
@dataclass
class RespondDecisionTaskCompletedInput:
    decisions: Optional[List[decision.Decision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisions' }})
    execution_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionContext' }})
    task_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskToken' }})
    
