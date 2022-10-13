from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import expensefield


@dataclass_json
@dataclass
class LineItemFields:
    line_item_expense_fields: Optional[List[expensefield.ExpenseField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineItemExpenseFields' }})
    
