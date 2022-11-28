from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LineItemProperties:
    r"""LineItemProperties
    This type contains information about the eBay programs under which a line item was listed and sold.
    """
    
    buyer_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerProtection') }})
    from_best_offer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromBestOffer') }})
    sold_via_ad_campaign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldViaAdCampaign') }})
    
