from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayoutSummaryResponse:
    r"""PayoutSummaryResponse
    This type is the base response type of the getPayoutSummary method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts.
    """
    
    amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    payout_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutCount') }})
    transaction_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCount') }})
    
