from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryCost:
    r"""DeliveryCost
    This type contains a breakdown of all costs associated with the fulfillment of a line item.
    """
    
    import_charges: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importCharges') }})
    shipping_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCost') }})
    shipping_intermediation_fee: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingIntermediationFee') }})
    
