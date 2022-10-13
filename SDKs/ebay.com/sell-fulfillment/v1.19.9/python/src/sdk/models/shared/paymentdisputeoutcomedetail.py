from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simpleamount
from . import simpleamount
from . import simpleamount
from . import simpleamount


@dataclass_json
@dataclass
class PaymentDisputeOutcomeDetail:
    fees: Optional[simpleamount.SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fees' }})
    protected_amount: Optional[simpleamount.SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectedAmount' }})
    protection_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectionStatus' }})
    reason_for_closure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonForClosure' }})
    recoup_amount: Optional[simpleamount.SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recoupAmount' }})
    total_fee_credit: Optional[simpleamount.SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFeeCredit' }})
    
