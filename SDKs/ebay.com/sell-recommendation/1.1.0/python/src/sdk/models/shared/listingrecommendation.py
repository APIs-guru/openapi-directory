from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListingRecommendation:
    r"""ListingRecommendation
    A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
    """
    
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingId') }})
    marketing: Optional[MarketingRecommendation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketing') }})
    
