from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ad:
    r"""Ad
    A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.
    """
    
    bid_percentages: Optional[List[BidPercentages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidPercentages') }})
    promote_with_ad: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promoteWithAd') }})
    
