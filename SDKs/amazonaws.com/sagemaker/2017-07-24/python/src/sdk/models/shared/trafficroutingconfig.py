from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrafficRoutingConfig:
    r"""TrafficRoutingConfig
    Currently, the <code>TrafficRoutingConfig</code> API is not supported.
    """
    
    type: TrafficRoutingConfigTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    wait_interval_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitIntervalInSeconds') }})
    canary_size: Optional[CapacitySize] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanarySize') }})
    
