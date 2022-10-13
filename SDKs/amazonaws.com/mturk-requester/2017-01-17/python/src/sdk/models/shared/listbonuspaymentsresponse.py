from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bonuspayment


@dataclass_json
@dataclass
class ListBonusPaymentsResponse:
    bonus_payments: Optional[List[bonuspayment.BonusPayment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BonusPayments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumResults' }})
    
