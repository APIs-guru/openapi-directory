from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class SellingLimit:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    
