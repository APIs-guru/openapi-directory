from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscribedWorkteam:
    r"""SubscribedWorkteam
    Describes a work team of a vendor that does the a labelling job.
    """
    
    workteam_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkteamArn') }})
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListingId') }})
    marketplace_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MarketplaceDescription') }})
    marketplace_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MarketplaceTitle') }})
    seller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SellerName') }})
    
