from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OtherRegionsSubscriptionOfferConfig:
    other_regions_new_subscriber_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherRegionsNewSubscriberAvailability' }})
    
