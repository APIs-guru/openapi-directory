from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricsname_enum
from . import metricsname_enum


@dataclass_json
@dataclass
class EnhancedMonitoringOutput:
    current_shard_level_metrics: Optional[List[metricsname_enum.MetricsNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentShardLevelMetrics' }})
    desired_shard_level_metrics: Optional[List[metricsname_enum.MetricsNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredShardLevelMetrics' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
