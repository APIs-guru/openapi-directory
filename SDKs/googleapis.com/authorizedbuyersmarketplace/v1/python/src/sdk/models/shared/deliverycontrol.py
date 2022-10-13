from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import frequencycap

class DeliveryControlCompanionDeliveryTypeEnum(str, Enum):
    COMPANION_DELIVERY_TYPE_UNSPECIFIED = "COMPANION_DELIVERY_TYPE_UNSPECIFIED"
    DELIVERY_OPTIONAL = "DELIVERY_OPTIONAL"
    DELIVERY_AT_LEAST_ONE = "DELIVERY_AT_LEAST_ONE"
    DELIVERY_ALL = "DELIVERY_ALL"

class DeliveryControlCreativeRotationTypeEnum(str, Enum):
    CREATIVE_ROTATION_TYPE_UNSPECIFIED = "CREATIVE_ROTATION_TYPE_UNSPECIFIED"
    ROTATION_EVEN = "ROTATION_EVEN"
    ROTATION_OPTIMIZED = "ROTATION_OPTIMIZED"
    ROTATION_MANUAL = "ROTATION_MANUAL"
    ROTATION_SEQUENTIAL = "ROTATION_SEQUENTIAL"

class DeliveryControlDeliveryRateTypeEnum(str, Enum):
    DELIVERY_RATE_TYPE_UNSPECIFIED = "DELIVERY_RATE_TYPE_UNSPECIFIED"
    EVENLY = "EVENLY"
    FRONT_LOADED = "FRONT_LOADED"
    AS_FAST_AS_POSSIBLE = "AS_FAST_AS_POSSIBLE"

class DeliveryControlRoadblockingTypeEnum(str, Enum):
    ROADBLOCKING_TYPE_UNSPECIFIED = "ROADBLOCKING_TYPE_UNSPECIFIED"
    ONLY_ONE = "ONLY_ONE"
    ONE_OR_MORE = "ONE_OR_MORE"
    AS_MANY_AS_POSSIBLE = "AS_MANY_AS_POSSIBLE"
    ALL_ROADBLOCK = "ALL_ROADBLOCK"
    CREATIVE_SET = "CREATIVE_SET"


@dataclass_json
@dataclass
class DeliveryControl:
    companion_delivery_type: Optional[DeliveryControlCompanionDeliveryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionDeliveryType' }})
    creative_rotation_type: Optional[DeliveryControlCreativeRotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeRotationType' }})
    delivery_rate_type: Optional[DeliveryControlDeliveryRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryRateType' }})
    frequency_cap: Optional[List[frequencycap.FrequencyCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyCap' }})
    roadblocking_type: Optional[DeliveryControlRoadblockingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roadblockingType' }})
    
