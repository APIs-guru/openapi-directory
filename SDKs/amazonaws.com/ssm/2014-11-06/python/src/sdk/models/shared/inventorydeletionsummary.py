from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryDeletionSummary:
    r"""InventoryDeletionSummary
    Information about the delete operation.
    """
    
    remaining_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemainingCount') }})
    summary_items: Optional[List[InventoryDeletionSummaryItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SummaryItems') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
