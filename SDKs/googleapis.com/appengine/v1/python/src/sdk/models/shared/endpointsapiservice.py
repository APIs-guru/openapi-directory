from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EndpointsAPIServiceRolloutStrategyEnum(str, Enum):
    UNSPECIFIED_ROLLOUT_STRATEGY = "UNSPECIFIED_ROLLOUT_STRATEGY"
    FIXED = "FIXED"
    MANAGED = "MANAGED"


@dataclass_json
@dataclass
class EndpointsAPIService:
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    disable_trace_sampling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTraceSampling' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rollout_strategy: Optional[EndpointsAPIServiceRolloutStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutStrategy' }})
    
