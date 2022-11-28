from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CombinedBillingUsage:
    days_left_in_billing_cycle: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('days_left_in_billing_cycle') }})
    estimated_paid_storage_for_month: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_paid_storage_for_month') }})
    estimated_storage_for_month: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_storage_for_month') }})
    
