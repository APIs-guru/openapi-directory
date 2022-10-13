from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import multiconditionalbranch
from . import waittime


@dataclass_json
@dataclass
class MultiConditionalSplitActivity:
    branches: Optional[List[multiconditionalbranch.MultiConditionalBranch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Branches' }})
    default_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultActivity' }})
    evaluation_wait_time: Optional[waittime.WaitTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationWaitTime' }})
    
