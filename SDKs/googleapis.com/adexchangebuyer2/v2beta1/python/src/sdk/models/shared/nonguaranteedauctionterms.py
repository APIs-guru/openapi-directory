from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import priceperbuyer


@dataclass_json
@dataclass
class NonGuaranteedAuctionTerms:
    auto_optimize_private_auction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoOptimizePrivateAuction' }})
    reserve_prices_per_buyer: Optional[List[priceperbuyer.PricePerBuyer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservePricesPerBuyer' }})
    
