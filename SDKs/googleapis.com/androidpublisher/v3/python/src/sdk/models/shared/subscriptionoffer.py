from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SubscriptionOfferStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class SubscriptionOfferInput:
    r"""SubscriptionOfferInput
    A single, temporary offer
    """
    
    base_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlanId') }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    offer_tags: Optional[List[OfferTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerTags') }})
    other_regions_config: Optional[OtherRegionsSubscriptionOfferConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    phases: Optional[List[SubscriptionOfferPhase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phases') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    regional_configs: Optional[List[RegionalSubscriptionOfferConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    targeting: Optional[SubscriptionOfferTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    

@dataclass_json
@dataclass
class SubscriptionOffer:
    r"""SubscriptionOffer
    A single, temporary offer
    """
    
    base_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlanId') }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    offer_tags: Optional[List[OfferTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerTags') }})
    other_regions_config: Optional[OtherRegionsSubscriptionOfferConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    phases: Optional[List[SubscriptionOfferPhase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phases') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    regional_configs: Optional[List[RegionalSubscriptionOfferConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    state: Optional[SubscriptionOfferStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    targeting: Optional[SubscriptionOfferTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    
