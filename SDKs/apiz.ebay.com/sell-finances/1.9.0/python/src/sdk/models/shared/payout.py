from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import payoutinstrument


@dataclass_json
@dataclass
class Payout:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    bank_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bankReference' }})
    last_attempted_payout_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttemptedPayoutDate' }})
    payout_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutDate' }})
    payout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutId' }})
    payout_instrument: Optional[payoutinstrument.PayoutInstrument] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutInstrument' }})
    payout_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutMemo' }})
    payout_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutStatus' }})
    payout_status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutStatusDescription' }})
    transaction_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionCount' }})
    
