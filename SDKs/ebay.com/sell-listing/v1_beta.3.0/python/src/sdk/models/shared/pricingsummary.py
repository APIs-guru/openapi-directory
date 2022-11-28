from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PricingSummary:
    r"""PricingSummary
    The type that defines the fields for the price details for an item.
    """
    
    auction_reserve_price: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionReservePrice') }})
    auction_start_price: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionStartPrice') }})
    price: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
