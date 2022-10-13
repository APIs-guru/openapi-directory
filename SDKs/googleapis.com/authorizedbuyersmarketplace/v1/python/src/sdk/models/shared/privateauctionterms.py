from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class PrivateAuctionTerms:
    floor_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorPrice' }})
    open_auction_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openAuctionAllowed' }})
    
