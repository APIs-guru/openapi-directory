from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import capacitysize
from . import trafficroutingconfigtype_enum


@dataclass_json
@dataclass
class TrafficRoutingConfig:
    canary_size: Optional[capacitysize.CapacitySize] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanarySize' }})
    type: trafficroutingconfigtype_enum.TrafficRoutingConfigTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    wait_interval_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitIntervalInSeconds' }})
    
