from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import itvbillinghistoryrecord


@dataclass_json
@dataclass
class ItvBillingHistory:
    payment_history: List[itvbillinghistoryrecord.ItvBillingHistoryRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_history' }})
    
