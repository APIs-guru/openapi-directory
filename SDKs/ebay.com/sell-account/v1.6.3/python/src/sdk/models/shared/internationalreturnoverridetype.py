from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeduration


@dataclass_json
@dataclass
class InternationalReturnOverrideType:
    return_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnMethod' }})
    return_period: Optional[timeduration.TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPeriod' }})
    return_shipping_cost_payer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShippingCostPayer' }})
    returns_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnsAccepted' }})
    
