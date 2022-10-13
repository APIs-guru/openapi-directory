from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class PayoutSummaryResponse:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    payout_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutCount' }})
    transaction_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionCount' }})
    
