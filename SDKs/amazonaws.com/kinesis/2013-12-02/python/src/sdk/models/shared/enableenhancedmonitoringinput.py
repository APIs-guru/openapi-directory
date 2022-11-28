from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnableEnhancedMonitoringInput:
    r"""EnableEnhancedMonitoringInput
    Represents the input for <a>EnableEnhancedMonitoring</a>.
    """
    
    shard_level_metrics: List[MetricsNameEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardLevelMetrics') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
