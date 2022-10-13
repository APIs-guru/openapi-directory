from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LineItemProperties:
    buyer_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerProtection' }})
    from_best_offer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromBestOffer' }})
    sold_via_ad_campaign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soldViaAdCampaign' }})
    
