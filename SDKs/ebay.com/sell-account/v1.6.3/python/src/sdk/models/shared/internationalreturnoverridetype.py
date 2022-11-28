from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InternationalReturnOverrideType:
    r"""InternationalReturnOverrideType
    This type defines the fields for a seller's international return policy. If a seller does not populate the fields in this complex type, the international return policy defaults to the return policy set for domestic returns.
    """
    
    return_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethod') }})
    return_period: Optional[TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPeriod') }})
    return_shipping_cost_payer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShippingCostPayer') }})
    returns_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnsAccepted') }})
    
