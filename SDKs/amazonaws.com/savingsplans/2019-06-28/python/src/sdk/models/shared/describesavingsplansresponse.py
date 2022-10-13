from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import savingsplan


@dataclass_json
@dataclass
class DescribeSavingsPlansResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    savings_plans: Optional[List[savingsplan.SavingsPlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingsPlans' }})
    
