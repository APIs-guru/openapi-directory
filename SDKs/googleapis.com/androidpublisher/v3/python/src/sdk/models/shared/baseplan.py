from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autorenewingbaseplantype
from . import offertag
from . import otherregionsbaseplanconfig
from . import prepaidbaseplantype
from . import regionalbaseplanconfig

class BasePlanStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class BasePlan:
    auto_renewing_base_plan_type: Optional[autorenewingbaseplantype.AutoRenewingBasePlanType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRenewingBasePlanType' }})
    base_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basePlanId' }})
    offer_tags: Optional[List[offertag.OfferTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerTags' }})
    other_regions_config: Optional[otherregionsbaseplanconfig.OtherRegionsBasePlanConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherRegionsConfig' }})
    prepaid_base_plan_type: Optional[prepaidbaseplantype.PrepaidBasePlanType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prepaidBasePlanType' }})
    regional_configs: Optional[List[regionalbaseplanconfig.RegionalBasePlanConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalConfigs' }})
    state: Optional[BasePlanStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
