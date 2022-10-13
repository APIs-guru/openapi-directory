from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import goaldata


@dataclass_json
@dataclass
class GoalSetData:
    goals: Optional[List[goaldata.GoalData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goals' }})
    
