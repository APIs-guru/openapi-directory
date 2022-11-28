from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionOfferPhase:
    r"""SubscriptionOfferPhase
    A single phase of a subscription offer.
    """
    
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    other_regions_config: Optional[OtherRegionsSubscriptionOfferPhaseConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    recurrence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrenceCount') }})
    regional_configs: Optional[List[RegionalSubscriptionOfferPhaseConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    
