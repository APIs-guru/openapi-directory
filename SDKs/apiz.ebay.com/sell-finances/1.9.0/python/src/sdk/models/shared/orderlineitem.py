from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import fee


@dataclass_json
@dataclass
class OrderLineItem:
    fee_basis_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeBasisAmount' }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemId' }})
    marketplace_fees: Optional[List[fee.Fee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceFees' }})
    
