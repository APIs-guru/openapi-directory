from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lineitemgroup
from . import expensefield


@dataclass_json
@dataclass
class ExpenseDocument:
    expense_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpenseIndex' }})
    line_item_groups: Optional[List[lineitemgroup.LineItemGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineItemGroups' }})
    summary_fields: Optional[List[expensefield.ExpenseField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SummaryFields' }})
    
