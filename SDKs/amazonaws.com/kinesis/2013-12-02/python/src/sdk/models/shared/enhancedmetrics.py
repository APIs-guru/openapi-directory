from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricsname_enum


@dataclass_json
@dataclass
class EnhancedMetrics:
    shard_level_metrics: Optional[List[metricsname_enum.MetricsNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardLevelMetrics' }})
    
