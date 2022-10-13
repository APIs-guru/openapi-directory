from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import metricsname_enum


@dataclass_json
@dataclass
class EnableEnhancedMonitoringInput:
    shard_level_metrics: List[metricsname_enum.MetricsNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardLevelMetrics' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
