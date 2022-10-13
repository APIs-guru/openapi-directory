from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount


@dataclass_json
@dataclass
class DiscountSpecification:
    for_each_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forEachAmount' }})
    for_each_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forEachQuantity' }})
    min_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minAmount' }})
    min_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minQuantity' }})
    number_of_discounted_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfDiscountedItems' }})
    
