from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeduration


@dataclass_json
@dataclass
class ReturnPolicyDetails:
    policy_description_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDescriptionEnabled' }})
    refund_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundMethods' }})
    return_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnMethods' }})
    return_periods: Optional[List[timeduration.TimeDuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPeriods' }})
    return_shipping_cost_payers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShippingCostPayers' }})
    returns_acceptance_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnsAcceptanceEnabled' }})
    
