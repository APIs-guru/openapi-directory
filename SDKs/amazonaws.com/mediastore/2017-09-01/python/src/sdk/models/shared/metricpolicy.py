from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerlevelmetrics_enum
from . import metricpolicyrule


@dataclass_json
@dataclass
class MetricPolicy:
    container_level_metrics: containerlevelmetrics_enum.ContainerLevelMetricsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerLevelMetrics' }})
    metric_policy_rules: Optional[List[metricpolicyrule.MetricPolicyRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricPolicyRules' }})
    
