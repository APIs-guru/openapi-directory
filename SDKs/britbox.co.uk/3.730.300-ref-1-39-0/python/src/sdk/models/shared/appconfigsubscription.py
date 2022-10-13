from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import plan


@dataclass_json
@dataclass
class AppConfigSubscription:
    plans: Optional[List[plan.Plan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plans' }})
    
