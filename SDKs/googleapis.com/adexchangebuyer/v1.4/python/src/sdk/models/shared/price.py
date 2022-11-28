from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Price:
    amount_micros: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountMicros') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    expected_cpm_micros: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedCpmMicros') }})
    pricing_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingType') }})
    
