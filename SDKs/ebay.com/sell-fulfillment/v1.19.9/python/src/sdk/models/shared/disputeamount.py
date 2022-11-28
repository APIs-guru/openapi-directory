from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisputeAmount:
    r"""DisputeAmount
    This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
    """
    
    converted_from_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertedFromCurrency') }})
    converted_from_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertedFromValue') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    exchange_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeRate') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
