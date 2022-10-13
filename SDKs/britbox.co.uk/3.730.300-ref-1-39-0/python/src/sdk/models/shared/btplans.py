from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import btplanlistitem


@dataclass_json
@dataclass
class BtPlans:
    plans: List[btplanlistitem.BtPlanListItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plans' }})
    
