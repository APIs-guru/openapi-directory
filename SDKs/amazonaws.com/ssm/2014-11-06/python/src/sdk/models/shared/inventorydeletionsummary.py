from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventorydeletionsummaryitem


@dataclass_json
@dataclass
class InventoryDeletionSummary:
    remaining_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemainingCount' }})
    summary_items: Optional[List[inventorydeletionsummaryitem.InventoryDeletionSummaryItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SummaryItems' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
