from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeliveryControlCreativeBlockingLevelEnum(str, Enum):
    CREATIVE_BLOCKING_LEVEL_UNSPECIFIED = "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED"
    PUBLISHER_BLOCKING_RULES = "PUBLISHER_BLOCKING_RULES"
    ADX_POLICY_BLOCKING_ONLY = "ADX_POLICY_BLOCKING_ONLY"

class DeliveryControlDeliveryRateTypeEnum(str, Enum):
    DELIVERY_RATE_TYPE_UNSPECIFIED = "DELIVERY_RATE_TYPE_UNSPECIFIED"
    EVENLY = "EVENLY"
    FRONT_LOADED = "FRONT_LOADED"
    AS_FAST_AS_POSSIBLE = "AS_FAST_AS_POSSIBLE"


@dataclass_json
@dataclass
class DeliveryControl:
    r"""DeliveryControl
    Message contains details about how the deals will be paced.
    """
    
    creative_blocking_level: Optional[DeliveryControlCreativeBlockingLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeBlockingLevel') }})
    delivery_rate_type: Optional[DeliveryControlDeliveryRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryRateType') }})
    frequency_caps: Optional[List[FrequencyCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCaps') }})
    
