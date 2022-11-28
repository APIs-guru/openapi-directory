from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegionalSubscriptionOfferConfig:
    r"""RegionalSubscriptionOfferConfig
    Configuration for a subscription offer in a single region.
    """
    
    new_subscriber_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSubscriberAvailability') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
