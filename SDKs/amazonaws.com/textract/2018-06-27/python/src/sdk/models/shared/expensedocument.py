from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExpenseDocument:
    r"""ExpenseDocument
    The structure holding all the information returned by AnalyzeExpense
    """
    
    expense_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpenseIndex') }})
    line_item_groups: Optional[List[LineItemGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItemGroups') }})
    summary_fields: Optional[List[ExpenseField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SummaryFields') }})
    
