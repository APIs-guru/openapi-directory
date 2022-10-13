from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CombinedBillingUsage:
    days_left_in_billing_cycle: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days_left_in_billing_cycle' }})
    estimated_paid_storage_for_month: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_paid_storage_for_month' }})
    estimated_storage_for_month: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_storage_for_month' }})
    
