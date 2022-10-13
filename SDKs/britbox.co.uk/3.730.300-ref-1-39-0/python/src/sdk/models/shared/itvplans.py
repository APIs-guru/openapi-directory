from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import itvplanlistitem


@dataclass_json
@dataclass
class ItvPlans:
    plans: List[itvplanlistitem.ItvPlanListItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plans' }})
    
