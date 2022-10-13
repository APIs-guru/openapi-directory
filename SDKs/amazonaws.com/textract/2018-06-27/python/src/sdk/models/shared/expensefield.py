from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import expensedetection
from . import expensetype
from . import expensedetection


@dataclass_json
@dataclass
class ExpenseField:
    label_detection: Optional[expensedetection.ExpenseDetection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelDetection' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageNumber' }})
    type: Optional[expensetype.ExpenseType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value_detection: Optional[expensedetection.ExpenseDetection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueDetection' }})
    
