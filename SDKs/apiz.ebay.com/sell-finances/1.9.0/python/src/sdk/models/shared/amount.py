from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Amount:
    r"""Amount
    This type is used to express the dollar value and currency used for any transaction retrieved with the Finances API, including an order total, a seller payout, a buyer refund, or a seller credit.
    """
    
    converted_from_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertedFromCurrency') }})
    converted_from_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertedFromValue') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    exchange_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeRate') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
