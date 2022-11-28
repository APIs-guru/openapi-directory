from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OtherRegionsSubscriptionOfferConfig:
    r"""OtherRegionsSubscriptionOfferConfig
    Configuration for any new locations Play may launch in specified on a subscription offer.
    """
    
    other_regions_new_subscriber_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsNewSubscriberAvailability') }})
    
