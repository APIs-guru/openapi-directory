from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PricePerBuyer:
    r"""PricePerBuyer
    Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set.
    """
    
    advertiser_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIds') }})
    buyer: Optional[Buyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
