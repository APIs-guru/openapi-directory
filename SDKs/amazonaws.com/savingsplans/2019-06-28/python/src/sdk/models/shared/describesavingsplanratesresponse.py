from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import savingsplanrate


@dataclass_json
@dataclass
class DescribeSavingsPlanRatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    savings_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingsPlanId' }})
    search_results: Optional[List[savingsplanrate.SavingsPlanRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchResults' }})
    
