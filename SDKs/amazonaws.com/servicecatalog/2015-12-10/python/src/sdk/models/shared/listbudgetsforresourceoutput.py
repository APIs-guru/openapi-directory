from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import budgetdetail


@dataclass_json
@dataclass
class ListBudgetsForResourceOutput:
    budgets: Optional[List[budgetdetail.BudgetDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Budgets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    
