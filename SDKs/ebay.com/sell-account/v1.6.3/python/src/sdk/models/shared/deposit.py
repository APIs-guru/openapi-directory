from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import timeduration
from . import paymentmethod


@dataclass_json
@dataclass
class Deposit:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    due_in: Optional[timeduration.TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dueIn' }})
    payment_methods: Optional[List[paymentmethod.PaymentMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethods' }})
    
