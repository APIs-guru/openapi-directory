from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LineItemFields:
    r"""LineItemFields
    A structure that holds information about the different lines found in a document's tables.
    """
    
    line_item_expense_fields: Optional[List[ExpenseField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItemExpenseFields') }})
    
