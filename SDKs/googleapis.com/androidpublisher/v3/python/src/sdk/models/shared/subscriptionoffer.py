from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import offertag
from . import otherregionssubscriptionofferconfig
from . import subscriptionofferphase
from . import regionalsubscriptionofferconfig
from . import subscriptionoffertargeting

class SubscriptionOfferStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class SubscriptionOffer:
    base_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basePlanId' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    offer_tags: Optional[List[offertag.OfferTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerTags' }})
    other_regions_config: Optional[otherregionssubscriptionofferconfig.OtherRegionsSubscriptionOfferConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherRegionsConfig' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    phases: Optional[List[subscriptionofferphase.SubscriptionOfferPhase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phases' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    regional_configs: Optional[List[regionalsubscriptionofferconfig.RegionalSubscriptionOfferConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalConfigs' }})
    state: Optional[SubscriptionOfferStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    targeting: Optional[subscriptionoffertargeting.SubscriptionOfferTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targeting' }})
    
