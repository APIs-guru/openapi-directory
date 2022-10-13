from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import condition
from . import waittime


@dataclass_json
@dataclass
class ConditionalSplitActivity:
    condition: Optional[condition.Condition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    evaluation_wait_time: Optional[waittime.WaitTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationWaitTime' }})
    false_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FalseActivity' }})
    true_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrueActivity' }})
    
