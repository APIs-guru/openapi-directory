from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import eeplanlistitem


@dataclass_json
@dataclass
class EePlans:
    plans: List[eeplanlistitem.EePlanListItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plans' }})
    
