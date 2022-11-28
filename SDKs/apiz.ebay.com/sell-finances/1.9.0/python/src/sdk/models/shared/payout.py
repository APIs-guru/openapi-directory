from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Payout:
    r"""Payout
    This type is used to express the details of one seller payout that is returned with the getPayout or getPayouts methods.
    """
    
    amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    bank_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankReference') }})
    last_attempted_payout_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptedPayoutDate') }})
    payout_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutDate') }})
    payout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    payout_instrument: Optional[PayoutInstrument] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutInstrument') }})
    payout_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutMemo') }})
    payout_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutStatus') }})
    payout_status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutStatusDescription') }})
    transaction_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCount') }})
    
