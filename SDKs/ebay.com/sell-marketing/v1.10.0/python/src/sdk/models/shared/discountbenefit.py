from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount


@dataclass_json
@dataclass
class DiscountBenefit:
    amount_off_item: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountOffItem' }})
    amount_off_order: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountOffOrder' }})
    percentage_off_item: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageOffItem' }})
    percentage_off_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageOffOrder' }})
    
