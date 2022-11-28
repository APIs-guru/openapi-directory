from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListingLease:
    down_payment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('down_payment') }})
    estimated_monthly_payment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_monthly_payment') }})
    lease_term: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lease_term') }})
    
