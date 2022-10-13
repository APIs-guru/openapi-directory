from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class OfferedItem:
    discount_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountPercentage' }})
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingId' }})
    price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    
