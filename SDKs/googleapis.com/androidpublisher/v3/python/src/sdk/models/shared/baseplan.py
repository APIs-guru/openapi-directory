from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BasePlanStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class BasePlanInput:
    r"""BasePlanInput
    A single base plan for a subscription.
    """
    
    auto_renewing_base_plan_type: Optional[AutoRenewingBasePlanType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewingBasePlanType') }})
    base_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlanId') }})
    offer_tags: Optional[List[OfferTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerTags') }})
    other_regions_config: Optional[OtherRegionsBasePlanConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    prepaid_base_plan_type: Optional[PrepaidBasePlanType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidBasePlanType') }})
    regional_configs: Optional[List[RegionalBasePlanConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    

@dataclass_json
@dataclass
class BasePlan:
    r"""BasePlan
    A single base plan for a subscription.
    """
    
    auto_renewing_base_plan_type: Optional[AutoRenewingBasePlanType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewingBasePlanType') }})
    base_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlanId') }})
    offer_tags: Optional[List[OfferTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerTags') }})
    other_regions_config: Optional[OtherRegionsBasePlanConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    prepaid_base_plan_type: Optional[PrepaidBasePlanType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidBasePlanType') }})
    regional_configs: Optional[List[RegionalBasePlanConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    state: Optional[BasePlanStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
