from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderLineItem:
    r"""OrderLineItem
    This type is used to show the fees that are deducted from a seller payout for each line item in an order.
    """
    
    fee_basis_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeBasisAmount') }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    marketplace_fees: Optional[List[Fee]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceFees') }})
    
