from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentDisputeOutcomeDetail:
    r"""PaymentDisputeOutcomeDetail
    This type is used by the resolution container that is returned for payment disputes that have been resolved.
    """
    
    fees: Optional[SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    protected_amount: Optional[SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedAmount') }})
    protection_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionStatus') }})
    reason_for_closure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonForClosure') }})
    recoup_amount: Optional[SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoupAmount') }})
    total_fee_credit: Optional[SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFeeCredit') }})
    
