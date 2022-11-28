from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DealTermsNonGuaranteedAuctionTerms:
    auto_optimize_private_auction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoOptimizePrivateAuction') }})
    reserve_price_per_buyers: Optional[List[PricePerBuyer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservePricePerBuyers') }})
    
