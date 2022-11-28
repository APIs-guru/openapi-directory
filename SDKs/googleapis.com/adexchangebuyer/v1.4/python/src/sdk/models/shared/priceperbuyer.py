from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PricePerBuyer:
    r"""PricePerBuyer
    Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set.
    """
    
    auction_tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionTier') }})
    billed_buyer: Optional[Buyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[Buyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
