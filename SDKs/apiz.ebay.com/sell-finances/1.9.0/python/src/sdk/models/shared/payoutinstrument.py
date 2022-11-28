from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayoutInstrument:
    r"""PayoutInstrument
    This type provides details about the seller's account that received (or is scheduled to receive) a payout.
    """
    
    account_last_four_digits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountLastFourDigits') }})
    instrument_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instrumentType') }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    
