from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoalData:
    goal_completion_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goalCompletionLocation' }})
    goal_completions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goalCompletions' }})
    goal_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goalIndex' }})
    goal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goalName' }})
    goal_previous_step1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goalPreviousStep1' }})
    goal_previous_step2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goalPreviousStep2' }})
    goal_previous_step3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goalPreviousStep3' }})
    goal_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goalValue' }})
    
