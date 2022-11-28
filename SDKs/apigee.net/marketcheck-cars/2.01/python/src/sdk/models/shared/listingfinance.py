from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListingFinance:
    down_payment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('down_payment') }})
    down_payment_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('down_payment_percentage') }})
    estimated_monthly_payment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_monthly_payment') }})
    loan_apr: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_apr') }})
    loan_term: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_term') }})
    
