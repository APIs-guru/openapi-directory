from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import rokuplanlistitem


@dataclass_json
@dataclass
class RokuPlans:
    plans: List[rokuplanlistitem.RokuPlanListItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plans' }})
    terms_and_conditions: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    
