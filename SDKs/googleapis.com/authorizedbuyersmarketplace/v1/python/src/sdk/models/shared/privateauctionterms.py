from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrivateAuctionTermsInput:
    r"""PrivateAuctionTermsInput
    Pricing terms for Private Auctions.
    """
    
    floor_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorPrice') }})
    

@dataclass_json
@dataclass
class PrivateAuctionTerms:
    r"""PrivateAuctionTerms
    Pricing terms for Private Auctions.
    """
    
    floor_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorPrice') }})
    open_auction_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openAuctionAllowed') }})
    
