from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import buyer
from . import buyer
from . import price


@dataclass_json
@dataclass
class PricePerBuyer:
    auction_tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auctionTier' }})
    billed_buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedBuyer' }})
    buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
