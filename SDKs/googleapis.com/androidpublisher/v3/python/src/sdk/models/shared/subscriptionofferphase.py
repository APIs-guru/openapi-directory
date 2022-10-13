from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import otherregionssubscriptionofferphaseconfig
from . import regionalsubscriptionofferphaseconfig


@dataclass_json
@dataclass
class SubscriptionOfferPhase:
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    other_regions_config: Optional[otherregionssubscriptionofferphaseconfig.OtherRegionsSubscriptionOfferPhaseConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherRegionsConfig' }})
    recurrence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurrenceCount' }})
    regional_configs: Optional[List[regionalsubscriptionofferphaseconfig.RegionalSubscriptionOfferPhaseConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalConfigs' }})
    
