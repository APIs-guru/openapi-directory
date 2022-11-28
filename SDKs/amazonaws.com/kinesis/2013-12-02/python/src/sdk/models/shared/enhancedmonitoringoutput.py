from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnhancedMonitoringOutput:
    r"""EnhancedMonitoringOutput
    Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
    """
    
    current_shard_level_metrics: Optional[List[MetricsNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentShardLevelMetrics') }})
    desired_shard_level_metrics: Optional[List[MetricsNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredShardLevelMetrics') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
