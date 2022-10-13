from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timebasedautoscalingconfiguration


@dataclass_json
@dataclass
class DescribeTimeBasedAutoScalingResult:
    time_based_auto_scaling_configurations: Optional[List[timebasedautoscalingconfiguration.TimeBasedAutoScalingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeBasedAutoScalingConfigurations' }})
    
