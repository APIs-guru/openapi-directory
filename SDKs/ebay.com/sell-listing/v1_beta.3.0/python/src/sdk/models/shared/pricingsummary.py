from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import amount


@dataclass_json
@dataclass
class PricingSummary:
    auction_reserve_price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auctionReservePrice' }})
    auction_start_price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auctionStartPrice' }})
    price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
